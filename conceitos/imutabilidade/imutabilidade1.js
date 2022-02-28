const user = {
    name: "Vinícius",
    lastName: "Carvalho"
}

function FullName(user) {
    return {
        ...user,
        fullname: `${user.name} ${user.lastName}`
    }
}

const userFullName = FullName(user)

console.log(userFullName)

// o código vei retornar UM NOVO OBJETO com os mesmos valores mais o fullname.