import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  template: `
    <div class="container-fluid mt-5">
      <div class="row justify-content-center">
        <div class="col-md-7 p-4 border rounded shadow-sm shadow-lg">
          
          <ul class="nav nav-pills nav-fill mb-4">
            <li class="nav-item w-25">
              <button
                class="nav-link active fw-semibold px-3 py-2"
                data-bs-toggle="tab"
                data-bs-target="#login"
                type="button"
              >
                Login <i class="fa-solid fa-unlock"></i>
              </button>
            </li>

            <li class="nav-item w-25">
              <button
                class="nav-link fw-semibold px-3 py-2"
                data-bs-toggle="tab"
                data-bs-target="#register"
                type="button"
              >
                Register <i class="fa-solid fa-user-plus"></i>
              </button>
            </li>
          </ul>

          <div class="tab-content mt-5">

            <div class="tab-pane fade show active" id="login">
              <h4 class="mb-3 text-center fs-2">Login</h4>
              <br/>
              <div class="mb-3">
                <input type="email" class="form-control form-control-lg" placeholder="Email">
              </div>
              <div class="mb-3">
                <input type="password" class="form-control form-control-lg" placeholder="Password">
              </div>
              <button class="btn btn-primary btn-lg w-100 mt-3" type="button">Login</button>
            </div>

            <div class="tab-pane fade" id="register">
              <h4 class="mb-3 text-center fs-2">Register</h4>
              <br/>
              <div class="mb-3">
                <input type="text" class="form-control form-control-lg" placeholder="Name">
              </div>
              <div class="mb-3">
                <input type="email" class="form-control form-control-lg" placeholder="Email">
              </div>
              <div class="mb-3">
                <input type="password" class="form-control form-control-lg" placeholder="Password">
              </div>
              <button class="btn btn-primary btn-lg w-100 mt-3" type="button">Register</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  `
})
export class AuthPage {}