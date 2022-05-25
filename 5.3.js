function nestedArrayAndObject() {
    // refactor this to a single line of destructuring...

    const info = {
        title: 'Once Upon a Time',
        protagonist: {
            name: 'Emma Swan',
            enemies: [
                {name: 'Regina Mills', title: 'Evil Queen'},
                {name: 'Cora Mills', title: 'Queen of Hearts'},
                {name: 'Peter Pan', title: `The boy who wouldn't grow up`},
                {name: 'Zelena', title: 'The Wicked Witch'},
            ],
        },
    }
    let {title: serie , protagonist: {name: Hero, enemies: [{name: Enemies, title: title}]} } = info
    // const {} = info // <-- replace the next few `const` lines with this

    for ()
    return console.log(`${Enemies} (${title}) is an enemy to ${Hero} in "${serie}"`)

}
nestedArrayAndObject()