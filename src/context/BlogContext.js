import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'delete_blogpost':
      return state.filter(blogPost => blogPost.id !== action.payload);
    case 'add_blogpost':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content
        }
      ];
    case 'edit_blogpost':
      return state.map((blog) => {
        return blog.id === action.payload.id 
        ? action.payload
        : blog
      })
    default:
      return state;
  }
};

const addBlogPost = dispatch => {
  return (title, content, callBack) => {
    if(title===''||content===''){
      alert('Input field cannot be empty')
    }else{
      dispatch({ type: 'add_blogpost', payload: {title, content} });
      callBack()
    }
    
  };
};

const editBlogPost = dispatch => {
  return(title, content, id, callBack) => {
    if(title===''||content===''){
      alert('Input field cannot be empty')
    }else{
      dispatch({type: 'edit_blogpost', payload:{title,content,id}})
      callBack()
    }
  }
}


const deleteBlogPost = dispatch => {
  return id => {
    dispatch({ type: 'delete_blogpost', payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  []
);
