import React /*{ Component }*/ from 'react'

// export class Newsitem extends Component {

//   render() {
  const Newsitem=(props)=>{
    let { title, description, imageurl, newsurl, date, author, source } = /*this.props*/props;
    return (
      <div className='my-3 mx-5'>
        <div className="card">
          <div style={{
            display:'flex',
            justifyContent:'flex-end',
            position:'absolute',
            right:'0'
          }
            }>
          <span className=" badge rounded-pill bg-danger" >{source}</span>
          </div>
          <img src={!imageurl ? "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=600" : imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text "><small className="text-success">by {!author ? "Unkonwn" : author} on 3 {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
//}

export default Newsitem
