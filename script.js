function howILikeToEat (fruits) {
    if (fruits.includes("dorado")) {
        fruits[fruits.indexOf("dorado")] = "fish";
    }

    let sentence1 = fruits.join(", ") + " I only eat that in summer.";
    let sentence2 = fruits.join(", ") + " I only eat that once a week.";
    let sentence3 = fruits.join(", ") + " I do not eat";
    
    if (fruits.includes("cherries") || fruits.includes("dragonfruits")) {
        return sentence1;
    }
    
    else if (fruits.includes("dorado") || fruits.includes("beaf") || fruits.includes("tofu")) {
        return sentence2;
    }
    
    else {
        return sentence3;
    }
}

document.write(howILikeToEat(['cherries','dragonfruits']) + '<br>');
document.write(howILikeToEat(['dorado','beaf','tofu']) + '<br>');
document.write(howILikeToEat(['computer']) + '<br>');