let script = {
    intro: [
        {
            type: "speech",
            characterImage: "Stan",
            text: "Hello! I love you!"
        },
        {
            type: "speech",
            characterImage: "Joe",
            text: "Do you love me?"
        },
        {
            type: "choice",
            choices: [
                {
                    text: "Sure",
                    nextScene: "sad",
                    button: {
                        x: 100,
                        y: 100,
                        w: 200,
                        h: 40
                    }
                },
                {
                    text: "Nope",
                    nextScene: "sad",
                    button: {
                        x: 100,
                        y: 150,
                        w: 200,
                        h: 40
                    }
                }
            ]
        }
    ],
    love: [
        {
            type: "speech",
            text: "Great!"
        },
        {
            type: "speech",
            text: "Let's get married?"
        },
        {
            type: "transition",
            nextScene: "intro"
        }
    ],
    sad: [
        {
            type: "speech",
            text: "Oh no!"
        },
        {
            type: "speech",
            text: "Let's get married?"
        },
        {
            type: "transition",
            nextScene: "intro"
        }
    ]
}