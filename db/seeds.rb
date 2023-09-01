puts "🥷👩‍🦰 Seeding users..."


User.create!([
    {
        username: "Doug", 
        password: "farmer"
    },
    {
        username: "Sarah", 
        password: "sausage"
    },
    {
        username: "Dan", 
        password: "book"
    },
    {
        username: "Frank", 
        password: "timmy"
    },
    {
        username: "Harry", 
        password: "dino"
    },
    {
        username: "Samantha", 
        password: "cat"
    },
    {
        username: "Tim", 
        password: "dog"
    },
    {
        username: "Tate", 
        password: "iscool"
    }
])

puts "🤡🤠👽🤖 Seeding categories" 

Category.create!([
    {
        name: "SCI-FI",
        description: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. 
        De carne lumbering animata corpora quaeritis."
    },
    {
        name: "PEOPLE",
        description: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. 
        De carne lumbering animata corpora quaeritis."
    },
    {
        name: "SILLY",
        description: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. 
        De carne lumbering animata corpora quaeritis."
    },
    {
        name: "ANIMALS",
        description: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. 
        De carne lumbering animata corpora quaeritis."
    },
    {
        name: "PLACES",
        description: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. 
        De carne lumbering animata corpora quaeritis."
    },
    {
        name: "GROSS!",
        description: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. 
        De carne lumbering animata corpora quaeritis."
    }
])

Drawing.create!([
    {
        adjective: "smelly",
        noun: "cat",
        verb: "swam",
        adverb: "happily",
        user_id: 2,
        category_id: 4
    },
    {
        adjective: "jolly",
        noun: "witch",
        verb: "laughed",
        adverb: "angrily",
        user_id: 1,
        category_id: 5
    },
    {
        adjective: "tall",
        noun: "carrot",
        verb: "slept",
        adverb: "quickly",
        user_id: 3,
        category_id: 4
    },
    {
        adjective: "short",
        noun: "giraffe",
        verb: "ate",
        adverb: "sadly",
        user_id: 6,
        category_id: 5
    },
    {
        adjective: "stinky",
        noun: "alien",
        verb: "surfed",
        adverb: "backwards",
        user_id: 5,
        category_id: 6
    },
    {
        adjective: "strange",
        noun: "cupcake",
        verb: "hid",
        adverb: "like a ninja",
        user_id: 4,
        category_id: 1
    },
    {
        adjective: "hairy",
        noun: "skeleton",
        verb: "danced",
        adverb: "merrily",
        user_id: 3,
        category_id: 2
    },
    {
        adjective: "frustrated",
        noun: "baby",
        verb: "kissed",
        adverb: "puppies",
        user_id: 2,
        category_id: 3
    },
    {
        adjective: "tired",
        noun: "werewolf",
        verb: "chased",
        adverb: "butterflies",
        user_id: 1,
        category_id: 4
    }
])


UserDrawing.create!([
    {
        adjective: "smelly",
        noun: "cat",
        verb: "swam",
        adverb: "happily",
        user_id: 2,
    },
    {
        adjective: "jolly",
        noun: "witch",
        verb: "laughed",
        adverb: "angrily",
        user_id: 1,
    },
    {
        adjective: "tall",
        noun: "carrot",
        verb: "slept",
        adverb: "quickly",
        user_id: 3,
    },
    {
        adjective: "short",
        noun: "giraffe",
        verb: "ate",
        adverb: "sadly",
        user_id: 6,
    },
    {
        adjective: "stinky",
        noun: "alien",
        verb: "surfed",
        adverb: "backwards",
        user_id: 5,
    },
    {
        adjective: "strange",
        noun: "cupcake",
        verb: "hid",
        adverb: "like a ninja",
        user_id: 4,
    },
    {
        adjective: "hairy",
        noun: "skeleton",
        verb: "danced",
        adverb: "merrily",
        user_id: 3,
    },
    {
        adjective: "frustrated",
        noun: "baby",
        verb: "kissed",
        adverb: "puppies",
        user_id: 2,
    },
    {
        adjective: "tired",
        noun: "werewolf",
        verb: "chased",
        adverb: "butterflies",
        user_id: 1,
    },
    {
        adjective: "tired",
        noun: "werewolf",
        verb: "chased",
        adverb: "butterflies",
        user_id: 8,
    }
])