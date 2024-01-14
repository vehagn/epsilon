export default defineEventHandler(async (event) => {
    const id = parseInt(getRouterParam(event, 'id')!) as number

    if (!Number.isInteger(id)) {
        throw createError({
            statusCode: 400,
            statusMessage: 'ID should be an integer',
        })
    }

    const config = useRuntimeConfig()
    return await $fetch(`${config.backendUrl}/api/v1/users/${id}`)
        .catch(err => {
            if (err.statusCode == 404) {
                console.log('User not found')
            }
        })
})
