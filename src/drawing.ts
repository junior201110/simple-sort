import Draw, { User } from "./Draw";

export default (users: User[], draws: Draw[], lastDraw?: Draw): Draw => {
    let lastIndex = -1;
    if (lastDraw) {
        lastIndex = lastDraw.getLastIndex()
    }

    let user;
    let index = -1;
    while (!user) {
        index = Math.ceil(Math.random() * users.length);
        if (draws.map(d => d.getLastIndex()).indexOf(index) > -1) {
            continue
        }
        if (lastIndex > -1 && index < lastIndex + 2)
            user = users[index];
        else
            user = users[index];
        console.log("TESTANDO", index, user);
    };
    const draw = new Draw(user);
    draw.setLastIndex(index);
    return draw;
}