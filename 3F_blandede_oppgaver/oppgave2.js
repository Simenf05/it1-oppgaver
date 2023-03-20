
const movies = [
    {
        tittel: "simen sin film",
        regissor: "ole bg",
        harSettDen: false,
    },
    {
        tittel: "film2",
        regissor: "simen2",
        harSettDen: true,
    },
    {
        tittel: "film3",
        regissor: "simen3",
        harSettDen: false,
    },
    {
        tittel: "agasdfadsfad",
        regissor: "simen4",
        harSettDen: false,
    },
    {
        tittel: "film5",
        regissor: "simen5",
        harSettDen: true,
    },
    {
        tittel: "film6",
        regissor: "simen6",
        harSettDen: true,
    },
    {
        tittel: "film7",
        regissor: "simen7",
        harSettDen: true,
    },
    {
        tittel: "film8",
        regissor: "simen8",
        harSettDen: false,
    },

]

//c
movies.sort((a, b) => {
    const a_val = a.tittel.toLowerCase()
    const b_val = b.tittel.toLowerCase()

    let comparison = 0

    if (a_val > b_val) {
        comparison = 1
    } else if (a_val < b_val) {
        comparison = -1
    }
    return comparison
})


//b
for (const moviesKey in movies) {
    console.log(`tittel: ${movies[moviesKey].tittel}`)
    console.log(`regi: ${movies[moviesKey].regissor}`)
}

//d
for (const moviesKey in movies) {

    const element = movies[moviesKey]

    element.harSettDen ?
        element.tittel = `Sett: ${element.tittel}` :
        element.tittel = `Ikke sett: ${element.tittel}`
}

console.log(movies)