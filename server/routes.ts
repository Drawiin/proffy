import express from 'express'
import db from './src/database/connections'
import convertHourToMinutes from './src/utils/convertHourToMinute'

const routes = express.Router()

interface Schedule {
    week_day: number,
    from: string
    to: string
}

routes.post('/classes', async (request, response) => {
    const {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost,
        schedule,
    } = request.body

    const trx = await db.transaction()

    try{
        const insertedUsersIds  = await trx('users').insert({
            name,
            avatar,
            whatsapp,
            bio
        })

        const [user_id] = insertedUsersIds

        const insertedClassesIds =  await trx('classes').insert({
            subject,
            cost,
            user_id
        })

        const [class_id] = insertedClassesIds

        const classSchedule = schedule.map((scheduleItem: Schedule) => {
            return {
                class_id,
                week_day: scheduleItem.week_day,
                from: convertHourToMinutes(scheduleItem.from),
                to: convertHourToMinutes(scheduleItem.to)
            }
        })
        
        await trx('class_schedule').insert(classSchedule)

        await trx.commit()

        response.status(201).send()
    }catch(e){
        await trx.rollback()

        response.status(400).json({
            error: `${e}`
        })
    }

})

export default routes