# Challenge 04. Introduction to React

Create an application from scratch using **Webpack, Babel, Webpack Dev Server and ReactJS**.

In this application you will develop a **interface** similar to **Facebook** using React.

The information contained in the interface is **static** and need not reflect any REST API or backend.

## Application Screen

![Facebook](assets-desafio/facebook.png)

The layout doesn't have to look exactly the same, you can use your creativity to modify it any way you like.

Most importantly, all elements appear on screen.

The application layout is at [this link](challenge-assets/layout.sketch) which can be opened by this free online tool: https://www.figma.com/

## Components

In the image below I highlighted each component you will create and below the image is the description and responsibilities of each:

![Components](challenge-assets/components.png)

**Header (Yellow):** Responsible for displaying the logo and the link to access the profile;

**PostList (Green):** Responsible for storing post listing data, this data should be within the `state` of the component and not in a common variable, for example:

```js
class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Julio Alcantara',
          avatar: 'http://url-da-imagem.com/imagem.jpg'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'http://url-da-imagem.com/imagem.jpg'
            },
            content: "Conteúdo do comentário"
          }
        ],
      },
      {
        id: 2,
        // Remainder of new post data
      }
    ]
  };
}
```

**Post (Red):** Responsible for displaying the post data, this data must come through a property received from the PostList component, ie there in PostList you will have something like this:

```js
posts.map(post => <Post key={post.id} data={post} />)
```

**Comment (Blue):** Responsible for displaying a comment. Comment data will come from a component property. Within the Post component you will have a new `.map` to list the post comments:

```js
data.comments.map(comment => <Comment key={comment.id} data={comment} />)
```

## Delivery

This challenge **does not need to be delivered** and will not be fixed, but you can see the result of the challenge code here: https://github.com/Rocketseat/bootcamp-gostack-desafio-04

After completing the challenge, adding this code to your Github is a good way to demonstrate your knowledge for future opportunities.

“Success is not the result of a game, but the destiny of a journey”!
