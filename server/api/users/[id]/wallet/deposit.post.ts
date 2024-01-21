export default defineEventHandler(async (event) => {
    const id = parseInt(getRouterParam(event, 'id')!) as number
    const query = getQuery(event)

    if (!Number.isInteger(id)) {
        throw createError({
            statusCode: 400,
            statusMessage: 'ID must be an integer',
        })
    }

    const config = useRuntimeConfig()
    return await $fetch(`${config.backendUrl}/api/v1/users/${id}/wallet/deposit`, {
        method: 'POST',
        params: {value: query.value}
    })
})
