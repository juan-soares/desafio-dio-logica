const heroeName = "Thor";
const heroeXP = 0;

switch (true) {
        case (heroeXP < 1000):
            level = 'Ferro';
            break;
        case (heroeXP >= 1001 && xp <= 2000):
            level = 'Bronze';
            break;
        case (heroeXP >= 2001 && xp <= 5000):
            level = 'Prata';
            break;
        case (heroeXP >= 5001 && xp <= 7000):
            level = 'Ouro';
            break;
        case (heroeXP >= 7001 && xp <= 8000):
            level = 'Platina';
            break;
        case (heroeXP >= 8001 && xp <= 9000):
            level = 'Ascendente';
            break;
        case (heroeXP >= 9001 && xp <= 10000):
            level = 'Imortal';
            break;
        case (heroeXP >= 10001):
            level = 'Radiante';
            break;
    }

  console.log(`O Herói de nome ${heroeName} está no nível de ${level}`;
