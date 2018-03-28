# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

pizzas = [{name:"Ninja Pie", price:17.11, description:"Pepperoni, Jalapeño, Pineapple", category:"pizza"},
{name:"Drunk Candy", price:15.81, description:"Canadian Bacon, Pineapple", category:"pizza"},
{name:"Tritalian", price:17.57, description:"Pepperoni, Salami, Italian Sausage", category:"pizza"},
{name:"Potato Bacon", price:16.83, description:"Alfredo Sauce, Roasted Potatoes, Bacon", category:"pizza"},
{name:"Thai Chicken", price:18.13, description:"Thai Peanut Sauce, Chicken, Cilantro, Green Onions", category:"pizza"},
{name:"Hot Wing Pie", price:19.66, description:"Hot Sauce, Chicken, Bacon, Jalapeño, Pepper Jack", category:"pizza"},
{name:"Margheritah Eata Pizza", price:17.89, description:"Olive Oil, Tomatoes, Chopped Garlic, Fresh Basil, Oregano", category:"pizza"},
{name:"Munchy Mango", price:17.89, description:"Thai Peanut Sauce, Mangos, Brown Sugar Roasted Jalapeños, Green Onions", category:"pizza"},
{name:"Pie Hole Combo", price:19.93, description:"Pepperoni, Italian Sausage, Black Olives,  Mushrooms, Mixed Bell Peppers", category:"pizza"},
{name:"Pretty, Pretty Princess", price:22.16, description:"Pepperoni, Italian, Bacon, Canadian Bacon, Meatballs, Chorizo", category:"pizza"},
{name:"Traditional Veggie", price:19.47, description:"Black Olives, Mushrooms, Mixed Bell Peppers, Mixed Onions, Fresh Tomatoes", category:"pizza"},
{name:"Vegan (Totally Veegs)", price:22.07, description:"Vegan Roux Sauce, Spinach, Potatoes, Artichoke, Green Onions, Roasted Garlic", category:"pizza"},
{name:"Bird Dog", price:20.95, description:"Alfredo Sauce, Chicken, Bacon, Roasted Red Peppers, Roasted Garlic, Cilantro, Pepper Jack", category:"pizza"},
{name:"Pesto or Alfredo Veg", price:19.19, description:"Spinach, Artichoke Hearts, Sun Dried Tomatoes, Roasted Garlic", category:"pizza"},
{name:"Pie Hole Supreme", price:22.76, description:"Pepperoni, Italian Sausage, Canadian Bacon, Olives, Mushrooms, Bell Peppers, Onions", category:"pizza"}]

Item.create(pizzas)
