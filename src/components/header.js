import React, { Component } from "react";
import { Helmet } from 'react-helmet';
import Logo from './logo';
import Menu from './menu';

// const Header = () => {
//   const [visible, setVisible] = useState(false);
//   const [scrollY, setScrollY] = useState(0);

//   const callback = (scrollY) => {
//     console.log(scrollY);
//     setScrollY(scrollY);
//     setVisible(scrollY > 300 ? true : false);
//   }

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       window.addEventListener('scroll', callback(window.scrollY));

//       return () => window.removeEventListener('scroll', callback(scrollY))
//     }
//   })

//   return (
//     <>
//       <Helmet>
//           <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossOrigin="anonymous" />
//           <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap-theme.min.css" integrity="sha384-6pzBo3FDv/PJ8r2KRkGHifhEocL+1X2rVCTTkUfGk7/0pbek5mMa1upzvWbrUbOZ" crossOrigin="anonymous" />
//           <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Pathway+Gothic+One|Roboto:400,400i,600,600i,700,700i" />
//       </Helmet>
//       <header className={visible ? 'header-area fixed-menu' : 'header-area'}>
//           <div className="container">
//               <div className="row">
//                   <Logo />
//                   <Menu />
//               </div>
//           </div>
//       </header>
//     </>
//   )
// }
// export default Header;

export default class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false
    }
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        this.setState({
          visible: window.scrollY > 300 ? true : false
        })
      })
    }
  }
  render() {
    return (
      <>
        <Helmet>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossOrigin="anonymous" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap-theme.min.css" integrity="sha384-6pzBo3FDv/PJ8r2KRkGHifhEocL+1X2rVCTTkUfGk7/0pbek5mMa1upzvWbrUbOZ" crossOrigin="anonymous" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Pathway+Gothic+One|Roboto:400,400i,600,600i,700,700i" />
        </Helmet>
        <header className={this.state.visible ? 'header-area fixed-menu' : 'header-area'}>
            <div className="container">
                <div className="row">
                    <Logo />
                    <Menu />
                </div>
            </div>
        </header>
      </>
    )
  }
}