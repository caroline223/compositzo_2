require 'faker'
User.destroy_all
Entry.destroy_all
Content.destroy_all


User.create(username: "Caroline", password: "chocolate", email: "caroline22@email.com")
User.create(username: "Jessica", password: "vanilla", email: "jessica43@email.com")
User.create(username: "Ricardo", password: "basketball", email: "ricardojones@email.com")


5.times do 
    id = User.all.sample.id
    Entry.create( date: Faker::Date.backward(days: 4000), title: Faker::Book.title, user_id: id)

    3.times do
        id = Entry.all.sample.id
        Content.create( comment: Faker::Lorem.paragraph(sentence_count: 4),
        mood: "happy",
        entry_id: id
        )
    end
end



