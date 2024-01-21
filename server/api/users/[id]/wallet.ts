export default defineEventHandler(async (event) => {
    const id = parseInt(getRouterParam(event, 'id')!) as number

    if (!Number.isInteger(id)) {
        throw createError({
            statusCode: 400,
            statusMessage: 'ID must be an integer',
        })
    }

    const config = useRuntimeConfig()
    return await $fetch(`${config.backendUrl}/api/v1/users/${id}/wallet`)
        .catch(err => {
            if (err.statusCode == 404) {
                console.log('Wallet not found')
            }
        })
})
