export const api = {
    GenerateLink: async (link: string) => {
        const request = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
        const { ok, result } = await request.json()
        return { ok, result }
    }
}