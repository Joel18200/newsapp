import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-warning">
  <div class="container-fluid">
  <a class="navbar-brand"> <font style={{ color: 'red' }} >
              <img src="https://www.slazzer.com/downloads/6eab4b44-4516-11ef-872b-37e25cbb7c60/pngwing.com_prev_ui.png" alt="Bootstrap" width="40" height="40" />
              𝓝𝓢</font><font style={{ color: 'white' }}>-</font><font style={{ color: 'black' }}>𝓐𝓟𝓟</font>
            </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/"style={{color:'white'}}>𝒜𝒟𝒟</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/viewsub" style={{color:'white'}}>𝒱𝐼𝐸𝒲</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/searchsub" style={{color:'white'}}>𝒮𝐸𝒜𝑅𝒞𝐻</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/deletesub" style={{color:'white'}}>𝒟𝐸𝐿𝐸𝒯𝐸</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
