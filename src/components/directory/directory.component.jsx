import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import pg from './pg.png'
import rg from './rg.jpg'
import hg from './hg.jpg'
import mg from './mg.jpg'
import sd from './sd.jpg'

import "./directory.styles.scss"

class Directory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: [
        {
          title: 'PG',
          imageUrl: pg,
          size: 'large',
          id: 1,
          linkUrl: 'shop/pg'
        },
        {
          title: 'HG',
          imageUrl: hg,
          size: 'large',
          id: 2,
          linkUrl: 'shop/hg'
        },
        {
          title: 'MG',
          imageUrl: mg,
          id: 3,
          linkUrl: 'shop/mg'
        },
        {
          title: 'RG',
          imageUrl: rg,
          id: 4,
          linkUrl: 'shop/rg'
        },
        {
          title: 'SD',
          imageUrl: sd,
          id: 5,
          linkUrl: 'shop/sd'
        }
      ]
    };
  }



  render() {
    return (
      <div className="directory-menu">
        {
          this.state.sections.map(({ id, ...otherProps }) => (
            <MenuItem key={id} {...otherProps} />
          ))
        }
      </div>
    )
  }
}


export default Directory;