import React, { Component } from 'react'
import css from './Button.module.scss'

export class Button extends Component {
  render() {
    return (
      <button className={css['button']} type='button' onClick={this.props.onClick}>Load more</button>
    )
  }
}

export default Button