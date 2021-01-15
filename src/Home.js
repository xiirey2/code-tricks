import React from 'react'
import './Home.css'
import Post from './Post'
import Slogan from './Slogan'

function Home() {
    window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    console.log("scrolled: ",document.documentElement.scrollTop);}
    return (
        <div className="home">
            <Slogan/>
            <div className="home-body">
            <div className="home-row">
            <Post
            id="677" title="This is test code" content="we explained here how you can simplify condtitions in javasacript
            we explained here how you can simplify condtitions in javasacript
            we explained here how you can simplify condtitions in javasacript
            we explained here how you can simplify condtitions in javasacript
            we explained here how you can simplify condtitions in javasacript" 
            code_snippet="if(that == true){
                console.log(this);})
            if(that == true){
                console.log(this);})
            if(that == true){
                console.log(this);})
            if(that == true){
                console.log(this);})" 
            auther="by: xiirey xaashi" commments="Comments: 5" date="1/5/2020" />
            </div>
            <div className="home-row">
            <Post
            id="6771" title="This is test code" content="we explained here how you can simplify condtitions in javasacript
            we explained here how you can simplify condtitions in javasacript
            we explained here how you can simplify condtitions in javasacript
            we explained here how you can simplify condtitions in javasacript
            we explained here how you can simplify condtitions in javasacript" 
            code_snippet="if(that == true){
                console.log(this);})
            if(that == true){
                console.log(this);})
            if(that == true){
                console.log(this);})
            if(that == true){
                console.log(this);})" 
            auther="by: xiirey xaashi" commments="Comments: 5" date="1/5/2020" />
            </div>
            <div className="home-row">
            <Post
            id="6772" title="This is test code" content="we explained here how you can simplify condtitions in javasacript
            we explained here how you can simplify condtitions in javasacript
            we explained here how you can simplify condtitions in javasacript
            we explained here how you can simplify condtitions in javasacript
            we explained here how you can simplify condtitions in javasacript" 
            code_snippet="if(that == true){
                console.log(this);})
            if(that == true){
                console.log(this);})
            if(that == true){
                console.log(this);})
            if(that == true){
                console.log(this);})"
            auther="by: xiirey xaashi" commments="Comments: 5" date="1/5/2020" />
            </div>
            <div className="home-row">
            <Post
            id="6773" title="This is test code" content="we explained here how you can simplify condtitions in javasacript
            we explained here how you can simplify condtitions in javasacript
            we explained here how you can simplify condtitions in javasacript
            we explained here how you can simplify condtitions in javasacript
            we explained here how you can simplify condtitions in javasacript" 
            code_snippet="if(that == true){
                console.log(this);})
            if(that == true){
                console.log(this);})
            if(that == true){
                console.log(this);})
            if(that == true){
                console.log(this);})" 
            auther="by: xiirey xaashi" commments="Comments: 5" date="1/5/2020" />
            </div>
            </div>

            <div className= "home-sidebar">
                <p>This is home sidebar</p>
                <p>This is home sidebar</p>
                <p>This is home sidebar</p>
                <p>This is home sidebar</p>
                <p>This is home sidebar</p>
                <p>This is home sidebar</p>
                <p>This is home sidebar</p>
                <p>This is home sidebar</p>
                <p>This is home sidebar</p>
                <p>This is home sidebar</p>
                <p>This is home sidebar</p>
                <p>This is home sidebar</p>

                <p>This is home sidebar</p><p>This is home sidebar</p>

                <p>This is home sidebar, you welcome</p>
                <p>This is home sidebar</p>
                <p>This is home sidebar</p>
                <p>This is home sidebar</p>

            </div>
           
           
        </div>
    )
}

export default Home

