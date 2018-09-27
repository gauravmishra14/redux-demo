import React from "react";
import { connect } from "react-redux";
import { removeArticle } from "../actions/index";

const mapStateToProps = state => {
  return { articles: state.articles };
};

const mapDispatchToProps = dispatch => {
  return {
    removeArticle: articleId => dispatch(removeArticle(articleId))
  };
};


const ConnectedList = ({ articles, removeArticle }) => (
  <ul className="list-group list-group-flush">
    {articles.map(el => (
      <li className="list-group-item" key={el.id} onClick = {() => removeArticle(el.id)}>
         {el.title} <span className="right pointer">x</span>
      </li>
    ))}
  </ul>
);
const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
export default List;