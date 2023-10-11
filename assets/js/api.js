async function fetchProfileData () {
    const url = 'https://raw.githubusercontent.com/thales-pires45/js-developer-portfolio/base/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}