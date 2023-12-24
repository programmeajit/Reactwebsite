import React from 'react';
import './MyFooter.css'
const MyFooter = () => {
  return (
    <footer className=" text-light py-4 footer ">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-3 mb-4">
            <h5>Column 1</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light footer-link">Item 1</a></li>
              <li><a href="#" className="text-light footer-link">Item 2</a></li>
              <li><a href="#" className="text-light footer-link">Item 3</a></li>
              <li><a href="#" className="text-light footer-link">Item 4</a></li>
              <li><a href="#" className="text-light footer-link">Item 5</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h5>Column 2</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light footer-link">Item 6</a></li>
              <li><a href="#" className="text-light footer-link">Item 7</a></li>
              <li><a href="#" className="text-light footer-link">Item 8</a></li>
              <li><a href="#" className="text-light footer-link">Item 9</a></li>
              <li><a href="#" className="text-light footer-link">Item 10</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h5>Column 3</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light footer-link">Item 11</a></li>
              <li><a href="#" className="text-light footer-link">Item 12</a></li>
              <li><a href="#" className="text-light footer-link">Item 13</a></li>
              <li><a href="#" className="text-light footer-link">Item 14</a></li>
              <li><a href="#" className="text-light footer-link">Item 15</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h5>Column 4</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light footer-link">Item 16</a></li>
              <li><a href="#" className="text-light footer-link">Item 17</a></li>
              <li><a href="#" className="text-light footer-link">Item 18</a></li>
              <li><a href="#" className="text-light footer-link">Item 19</a></li>
              <li><a href="#" className="text-light footer-link">Item 20</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
