const alunos = [{ nome: 'Pedro', nota: 10 }, { nome: 'Ana', nota: 7 }, { nome: 'jose', nota: 6 }]

const resultadoAlunos = (alunos) => {

    for (let i = 0; i < alunos.length; i++) {

        if (alunos[i].nota >= 7) {
            console.log(alunos[i].nome, ': aprovado');

        } else {
            console.log(alunos[i].nome, ': reprovado');
        }
    }

}

console.log(resultadoAlunos(alunos));