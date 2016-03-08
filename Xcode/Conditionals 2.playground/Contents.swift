//: Playground - noun: a place where people can play

import UIKit

var myAccount = 1000.00
var myFriendsAccount = 2000.00
var myFriendsFriendAccount = 3000.00

if myAccount > 900 && myFriendsAccount > 1500 && myFriendsFriendAccount > 2000 {
    print("We've got mucho mulla")
}else{
    print("you broke dawg")
}

var playerAAlive = true
var playerBAlive = false
var playerCAlive = true

if playerAAlive == false || playerBAlive == false || playerCAlive == false {
    print("one of your players are dead")
}
 // instead of putting equal sign and false you can  use : 

//can I retire 

var age = 23
var account = 10
var inheritence = false

if account > 70000 && age >= 60 || inheritence == true {
    print("you can retire")
} else {
    print("you aint retiring")
}