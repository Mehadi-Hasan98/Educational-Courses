import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div>
            <h1 className='text-3xl text-center font-mono font-semibold mt-24 mb-12'>Our Courses</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ml-20 mb-12 mt-12 gap-4'>
            <div class="card card-compact w-9/12 bg-base-100 shadow-xl">
  <figure><img src="https://img.freepik.com/free-photo/businesswoman-using-tablet-analysis-graph-company-finance-strategy-statistics-success-concept-planning-future-office-room_74952-1410.jpg?w=400&t=st=1660993671~exp=1660994271~hmac=463ae368266886e78df5ad28e1d21f6e6a1c05e526b67dcf3c27a94e2f8068e8" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Basic Data Science Course</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Enroll Now</button>
    </div>
  </div>
</div>
            <div class="card card-compact w-9/12 bg-base-100 shadow-xl">
  <figure><img src="https://img.freepik.com/free-vector/futuristic-technology-destroying-artificial-intelligence-face_1017-21772.jpg?w=400&h=300&t=st=1660993735~exp=1660994335~hmac=f445a2a040fdeae53549d0564a788a88d9d1f2f1bb4dab146bfa199b595eebeb" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Machine Learning And Neural Network</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Enroll Now</button>
    </div>
  </div>
</div>
            <div class="card card-compact w-9/12 bg-base-100 shadow-xl">
  <figure><img src="https://img.freepik.com/free-photo/web-design-concept-with-drawings_1134-77.jpg?w=400&t=st=1660993824~exp=1660994424~hmac=ef664f079a626c0dd947b7dfd198d086ecefb0d0fa3ead230ea015339d1e2606" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Web Development Course</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Enroll Now</button>
    </div>
  </div>
</div>
            <div class="card card-compact w-9/12 bg-base-100 shadow-xl">
  <figure><img src="https://img.freepik.com/free-vector/app-development-landing-page_52683-47903.jpg?w=400&t=st=1660993879~exp=1660994479~hmac=7652dd58a73813a094d850156d268e60f08cc33c8dd7ac0b384459f1a850412d" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">App Development Course</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Enroll Now</button>
    </div>
  </div>
</div>
    </div>
    <div className='text-center'>
    <Link to="/courses"><button class="btn btn-primary">See more..</button></Link>
     </div>
        </div>
    );
};

export default Services;