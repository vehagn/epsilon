export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event)
    const query = getQuery(event)

    console.log(query)
    console.log('NOT THIS ONE')

    const repo = await $fetch(
        `https://delta-test.stonegarden.dev/api/v1/users/${query.user_id}`,
        {
        //headers: {
        //    Authorization: `token ${config.githubToken}`
        //}
    })

    return repo
})
