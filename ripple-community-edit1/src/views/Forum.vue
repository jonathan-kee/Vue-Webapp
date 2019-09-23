<template>
<div>
    <h1>Welcome to the Forum</h1>
    <div v-for= "thread in threads" v-bind:key="thread.id" class="col-large push-top">
      <h1>{{thread.title}}</h1>

      <div  class="post-list">
        <div v-for="postId in thread.posts" v-bind:key="postId.id" class="post">
          <div class="user-info">
            <a href="#" class="user-name">{{users[posts[postId].userId].name}}</a>

            <a href="#">
              <img class="avatar-large" :src="users[posts[postId].userId].avatar" alt ="">
            </a>

            <p class="desktop-only text-small">107 posts</p>
          </div>

          <div class="post-content">
            <div>{{posts[postId].text}}</div>
          </div>

          <div class="post-date text-faded">{{posts[postId].publushedAt}}</div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import sourceData from '@/data'
export default{
    data(){
        return {
            threads: sourceData.threads,
            posts: sourceData.posts,
            users: sourceData.users
        }
        }
}
</script>


