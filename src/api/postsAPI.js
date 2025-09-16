export const postsAPI = {
    fetchById(id) {
        if (!id) {
            throw new Error('Id is broken')
        }

      return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then((post) => post)
    }
}