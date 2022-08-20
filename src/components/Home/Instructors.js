import React from 'react';

const Instructors = () => {
    return (
        <div>
            <h1 className='text-3xl text-center font-mono mt-24 mb-6 font-semibold'>Our Best Instructors</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ml-20 mb-12 mt-12 gap-4'>
            <div class="card card-compact w-9/12 bg-base-100 shadow-xl">
  <figure><img src="https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=400" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Andrew Ng</h2>
    <p>Machine learning and neural network expert!</p>
    <div class="card-actions justify-end">
      <button class="btn btn-secondary">See more</button>
    </div>
  </div>
</div>
            <div class="card card-compact w-9/12 bg-base-100 shadow-xl">
  <figure><img src="https://img.freepik.com/free-photo/portrait-joyful-young-man-white-shirt_171337-17467.jpg?w=400&t=st=1660993477~exp=1660994077~hmac=853b0c351e1667970f1dd819de0a722d9f2e9ad1abb1c0839bb6ce03829450e5" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">John Stones</h2>
    <p>Industrial specialist on Web development sector.</p>
    <div class="card-actions justify-end">
    <button class="btn btn-secondary">See more</button>
    </div>
  </div>
</div>
            <div class="card card-compact w-9/12 bg-base-100 shadow-xl">
  <figure><img src="https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg?w=400&t=st=1660993232~exp=1660993832~hmac=b23688075c57d1381578f56acc1d16bf105439d4142bcac36011891ee1c8d62a" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Helena Gomes</h2>
    <p>UI and UX expert who is working in the field for over the years.</p>
    <div class="card-actions justify-end">
    <button class="btn btn-secondary">See more</button>
    </div>
  </div>
</div>
            <div class="card card-compact w-9/12 bg-base-100 shadow-xl">
  <figure><img src="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=400&t=st=1660993183~exp=1660993783~hmac=85c8c81e12e4fb7cd69dc8958a0e14221de32075da7a7e7d422a7c98ad7c643e" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Mehadi Hasan</h2>
    <p>Data science expert with hands on project.</p>
    <div class="card-actions justify-end">
    <button class="btn btn-secondary">See more</button>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default Instructors;