In App.js, uncomment `<house-marketplace />` and it's `import` statement.

# About The App -
- Register with email password or directly with google
- list their home or apartment for rent or sell
- Explore the listings
- If someone has put up special offer, it will be shown.
- 6 images per listing, use leaflet to put location on map
- Firebase 9 for backend, db, auth, file storage
- React for frontend
- Mobile first design

# Dependencies -
- npm i react-icons
- npm i firebase
- npm i react-router-dom
- npm i react-toastify

# imports
### from react
- useState - 
- useEffect - 

### from react-router-dom
- BrowserRouter as Router - 
- Routes - 
- Route - 
- useNavigate - 
- Link - 
- Navigate - used to redirect (not the hook)
- Outlet - allows to render child routes / elements (need necessary changes in App.js or wherever the routes are written)
- useParam - to get the parameter from link after / (here rent or sale)

### from firebase
- <b>from /auth:</b>
  - getAuth - 
  - createUserWithEmailAndPassword - 
  - updateProfile - 
  - signInWithEmailAndPassword - 
  - onAuthStateChange - when it goes from login state to logged out state, it gets fired off
- <b>from /firestore:</b>
  - setDoc - 
  - updateDoc - 
  - doc - 
  - serverTimestamp - 
  - collection - 
  - query - 
  - where - 
  - orderBy - 
  - limit - 
  - startAfter - for pagination
  - getDocs - 
- <b>from ../firebase.config file</b>
  - db

### from react-toastify
- toast - 
- ToastContainer - 

### from assets folder
- { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
- VisibilityIcon from "../assets/svg/visibilityIcon.svg"