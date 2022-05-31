const prompt = require('prompt-sync')();
console.clear();
console.log();

let resp = 0;
let reiniciar = '';

console.log(`BEM VINDO AO MEU SEGUNDO PROJETO DA BLUE: A JORNADA DO HERÓI!`);
console.log();

console.log(
    'Para melhor desenvolvimento do projeto, todas as perguntas devem ser respondidas apenas com "sim" ou "nao"!',
);
console.log();

console.log('Pressione ENTER para continuar.');
let cont = prompt();
console.clear();
console.log();

console.log(`Hoje iremos contar a história de um(a) jovem e seu cotidiano.
Com o objetivo de ser uma pessoa cada dia melhor, esse(a) jovem busca sempre tomar as melhores decisões no seu dia a dia, cumprindo com sucesso todos os seus deveres para se tornar cada vez mais produtivo(a).`);
console.log();

let nome = prompt('Mas antes de começar, como se chamará esse(a) jovem? ');
console.log();

console.log(`${nome}... 
É um bom nome!

Muito bem! Então vamos para a jornada diária do(a) nosso(a) jovem ${nome}.`);
console.log();

console.log('Pressione ENTER para continuar.');
cont = prompt();
console.clear();
console.log();

while (reiniciar != 'nao') {
    resp = 0;
    console.log(`Chegamos ao fim de mais um dia!
E como de costume, vamos revisar o sucesso de ${nome} em cumprir suas tarefas propostas.`);
    console.log();

    console.log(
        `${nome} tem uma primícia de vida: se você levantou e não arrumou sua cama, seu dia não começou bem.`,
    );
    console.log();

    let pergunta1 = prompt(
        `Hoje, ${nome} arrumou sua cama ao levantar? `,
    ).toLowerCase();
    console.log();

    while (pergunta1 != 'sim' && pergunta1 != 'nao') {
        console.log('Resposta inválida!');

        pergunta1 = prompt(
            `Hoje, ${nome} arrumou sua cama ao levantar? `,
        ).toLowerCase();
    }

    if (pergunta1 == 'sim') {
        console.log(
            `É claro que ${nome} não deixaria a desejar no primeiro desafio do dia.`,
        );
        resp++;
    } else if (pergunta1 == 'nao') {
        console.log(`Xiii! ${nome} já começou mal seu dia.`);
    }
    console.log();

    console.log('Pressione ENTER para continuar.');
    cont = prompt();
    console.clear();
    console.log();

    console.log(`Um ambiente organizado é primordial para as coisas fluirem melhor, de maneira mais leve.
${nome} sabe disso e por isso busca sempre manter sua casa bem limpa.`);
    console.log();

    let pergunta2 = prompt(
        `Na manhã de hoje, ${nome} arrumou sua casa? `,
    ).toLowerCase();
    console.log();

    while (pergunta2 != 'sim' && pergunta2 != 'nao') {
        console.log('Resposta inválida!');

        pergunta2 = prompt(
            `Na manhã de hoje, ${nome} arrumou sua casa? `,
        ).toLowerCase();
    }

    if (pergunta2 == 'sim') {
        console.log(
            `Um jovem com a casa limpa não quer guerra com ninguém. ${nome} leva isso à risca!`,
        );
        resp++;
    } else if (pergunta2 == 'nao') {
        console.log(`${nome} vacilou nessa, meu patrão!`);
    }
    console.log();

    console.log('Pressione ENTER para continuar.');
    cont = prompt();
    console.clear();
    console.log();

    console.log(
        `Depois dos seus afazeres matinais, ${nome} tem que estudar o seu curso de programação pois lá na Blue EdTech não tem mamata. É projeto atrás de projeto!`,
    );
    console.log();

    let pergunta3 = prompt(`${nome} estudou corretamente hoje? `).toLowerCase();
    console.log();

    while (pergunta3 != 'sim' && pergunta3 != 'nao') {
        console.log('Resposta inválida!');

        pergunta3 = prompt(`${nome} estudou corretamente hoje? `).toLowerCase();
    }

    if (pergunta3 == 'sim') {
        console.log(
            `Desse jeito ${nome} vai entrar no top 10 programadores mais bem pagos do Brasil! `,
        );
        resp++;
    } else if (pergunta3 == 'nao') {
        console.log(`Assim ${nome} nem conseguir emprego na área, vai.`);
    }
    console.log();

    console.log('Pressione ENTER para continuar.');
    cont = prompt();
    console.clear();
    console.log();

    console.log(
        'Falando em projeto, essa semana tem dois para serem entregues.',
    );
    console.log();

    let pergunta4 = prompt(
        `Eai? ${nome} fez um pouco do projeto hoje? `,
    ).toLowerCase();
    console.log();

    while (pergunta4 != 'sim' && pergunta4 != 'nao') {
        console.log('Resposta inválida!');

        pergunta4 = prompt(
            `Eai? ${nome} fez um pouco do projeto hoje? `,
        ).toLowerCase();
    }

    if (pergunta4 == 'sim') {
        console.log(
            `Ainda tem muito trabalho a fazer, mas pelo menos ${nome} fez a sua parte hoje.`,
        );
        resp++;
    } else if (pergunta4 == 'nao') {
        console.log(
            `Ai reprova o módulo e fica chorando pros professores pra não ter que fazer o provão, né?`,
        );
    }
    console.log();

    console.log('Pressione ENTER para continuar.');
    cont = prompt();
    console.clear();
    console.log();

    console.log(
        'Depois de um longo dia de estudos e afazeres, é necessário dar aquele talento na higiêne, não é mesmo?',
    );
    console.log();

    let pergunta5 = prompt(
        `${nome} tomou seu banho e escovou os dentes para dormir limpinho? `,
    ).toLowerCase();
    console.log();

    while (pergunta5 != 'sim' && pergunta5 != 'nao') {
        console.log('Resposta inválida!');

        pergunta5 = prompt(
            `${nome} tomou seu banho e escovou os dentes para dormir limpinho? `,
        ).toLowerCase();
    }

    if (pergunta5 == 'sim') {
        console.log(
            `${nome} é uma pessoa higiênica e cheirosa. Claro que não deixaria a desejar nisso.`,
        );
        resp++;
    } else if (pergunta5 == 'nao') {
        console.log(`É... Bem que senti a catinga daqui!`);
    }
    console.log();

    console.log('Pressione ENTER para continuar.');
    cont = prompt();
    console.clear();
    console.log();

    console.log(`E chegamos ao presente momento!

Analisando o dia de ${nome} hoje, chegamos a uma conclusão:
`);

    if (resp == 0) {
        console.log(
            `${nome} jogou seu dia no lixo hoje! Pelo amor de Deus, que falta de produtividade...`,
        );
    } else if (resp == 1 || resp == 2) {
        console.log(
            `Nada bom! ${nome} teve chances de produzir muito mais do que realmente produziu.`,
        );
    } else if (resp == 3) {
        console.log(
            `Digamos que o dia não foi desperdiçado totalmente, mas poderia ter sido bem melhor.`,
        );
    } else if (resp == 4) {
        console.log(
            `${nome} se esforçou hoje, hein! Não foi o dia perfeito, mas da pra dormir com a consciência mais tranquila hoje.`,
        );
    } else if (resp == 5) {
        console.log(
            `Maravilha!! ${nome} realmente concluiu TUDO que se propôs a fazer. Exemplo de ser humano!`,
        );
    }
    reiniciar = prompt('Deseja reiniciar o programa? ').toLowerCase();
    while (reiniciar != 'sim' && reiniciar != 'nao') {
        console.log('Resposta incorreta!');

        reiniciar = prompt('Deseja reiniciar o programa? ').toLowerCase();
    }
    console.clear();
}
console.log(`Aqui chegamos ao fim da jornada diária de ${nome}.
Até mais!
`);

console.log('Programa finalizado!');
