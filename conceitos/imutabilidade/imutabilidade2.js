const students = [{
        name: "Grace",
        grade: 6
    },
    {
        name: "Jhennifer",
        grade: 4
    },
    {
        name: "Paul",
        grade: 10
    },
]

function AprovedStudentsOnly(studentsL) {
    return studentsL.filter(student => student.grade >= 7)
}

console.log("Alunos aprovados")
console.log(AprovedStudentsOnly(students))

console.log("\nLista dos Alunos:")
console.log(students)

// o código vei retornar UM NOVO OBJETO com os alunos que possuem nota 7 ou maior.