<template>
  <div class="flex-grid">
    <UserProfileCard
      v-if="!edit"
      :user="user"
      :userPostsCount="userPostsCount"
      :userThreadsCount="userThreadsCount"
    />
    <UserProfileCardEditor
      v-else
      :user="user"
      :userPostsCount="userPostsCount"
      :userThreadsCount="userThreadsCount"
    />

    <div class="col-7 push-top">

      <div class="profile-header">
        <span class="text-lead">
            {{user.username}}'s recent activity
        </span>
        <a href="#">See only started threads?</a>
      </div>

      <hr>
      <PostList :posts="userPosts"/>
    </div>
  </div>
</template>

<script>
    import PostList from '@/components/PostList'
    import UserProfileCard from '@/components/UserProfileCard'
    import UserProfileCardEditor from '@/components/UserProfileCardEditor'
    import {mapGetters} from 'vuex'
    import {countObjectProperties} from '@/utils'
    export default {
      components: {
        PostList,
        UserProfileCard,
        UserProfileCardEditor
      },
      props: {
        edit: {
          type: Boolean,
          default: false
        }
      },
      computed: {
        ...mapGetters({
          user: 'authUser'
        }),
        userThreadsCount () {
          return countObjectProperties(this.user.threads)
        },
        userPostsCount () {
          return countObjectProperties(this.user.posts)
        },
        userPosts () {
          if (this.user.posts) {
            return Object.values(this.$store.state.posts)
              .filter(post => post.userId === this.user['.key'])
          }
          return []
        }
      }
    }
</script>

<style scoped>
</style>