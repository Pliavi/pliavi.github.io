<template>
  <div>
    bla
  </div>
</template>

<script>
export default {};
</script>

<page-query>
query BlogPost ($title: String!) {
  post:post (title: $title) {
    title
    date
    body
  }
}
</page-query>