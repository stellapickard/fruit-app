# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

fruits = ['Mango', 'Pineapple', 'Passion fruit', 'Dragonfruit']
fruits.each{|fruit| Fruit.create(name: fruit, description: "I am a delicious #{fruit}.")}