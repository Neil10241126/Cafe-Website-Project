<template>
  <div class="row row-cols-2 row-cols-md-4 g-3 g-md-4 mb-3 mb-md-4">
    <div class="col">
      <div class="card h-100">
        <div class="card-header d-flex justify-content-between align-items-center px-4">
          <svg
            width="32"
            height="32"
            class="text-db-primary-dark p-1 bg-db-primary-light rounded-circle"
          >
            <use xlink:href="/public/icons/dashboard-icons.svg#fig-coffee-goto"></use>
          </svg>
          <span class="fs-9 fs-lg-7 text-db-netural-dark fw-medium">目前商品數量</span>
        </div>
        <div class="card-body">
          <p class="fs-6 fs-lg-5 text-db-netural fw-bold text-end mb-0">64 項</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card h-100">
        <div class="card-header d-flex justify-content-between align-items-center px-4">
          <svg
            width="32"
            height="32"
            class="text-db-primary-dark p-1 bg-db-primary-light rounded-circle"
          >
            <use xlink:href="/public/icons/dashboard-icons.svg#fig-coffee-goto"></use>
          </svg>
          <span class="fs-9 fs-lg-7 text-db-netural-dark fw-medium">營業收入</span>
        </div>
        <div class="card-body">
          <p class="fs-6 fs-lg-5 text-db-netural fw-bold text-end mb-0">NT$ 164 k</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card h-100">
        <div class="card-header d-flex justify-content-between align-items-center px-4">
          <svg
            width="32"
            height="32"
            class="text-db-primary-dark p-1 bg-db-primary-light rounded-circle"
          >
            <use xlink:href="/public/icons/dashboard-icons.svg#fig-coffee-goto"></use>
          </svg>
          <span class="fs-9 fs-lg-7 text-db-netural-dark fw-medium">待處理訂單</span>
        </div>
        <div class="card-body">
          <p class="fs-6 fs-lg-5 text-db-netural fw-bold text-end mb-0">43 筆</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card h-100">
        <div class="card-header d-flex justify-content-between align-items-center px-4">
          <svg
            width="32"
            height="32"
            class="text-db-primary-dark p-1 bg-db-primary-light rounded-circle"
          >
            <use xlink:href="/public/icons/dashboard-icons.svg#fig-coffee-goto"></use>
          </svg>
          <span class="fs-9 fs-lg-7 text-db-netural-dark fw-medium">當前時間</span>
        </div>
        <div class="card-body">
          <p class="fs-8 text-db-netural fw-bold text-end mb-0">2014/10/17</p>
          <p class="fs-6 fs-lg-5 text-db-netural fw-bold text-end mb-0">13:30:26</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Main Chart Group -->
  <div class="row gy-3 mb-3 mb-md-4">
    <div class="col-12 col-md-8">
      <div class="card">
        <div class="card-header d-flex justify-content-between px-md-4">
          <div>
            <h3 class="fs-6 text-db-netural lh-base mb-0">每日營收</h3>
            <span class="text-db-netural-dark">平均 NT$45,010</span>
          </div>

          <a href="#" class="h-100" data-bs-toggle="dropdown" @click.prevent="">
            <svg width="24" height="24" class="text-db-netural-dark">
              <use xlink:href="/public/icons/dashboard-icons.svg#fig-dots-vertical"></use>
            </svg>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </a>
        </div>
        <div class="card-body px-md-4">
          <div ref="lineElement" style="height: 245px"></div>
        </div>
      </div>
    </div>

    <div class="col-12 col-md-4">
      <div class="card">
        <div class="card-header d-flex justify-content-between px-md-4">
          <div>
            <h3 class="fs-6 text-db-netural lh-base mb-0">銷售類型</h3>
            <span class="text-db-netural-dark">淺烘焙 NT$ 68.9k</span>
          </div>

          <a href="#" class="h-100" data-bs-toggle="dropdown" @click.prevent="">
            <svg width="24" height="24" class="text-db-netural-dark">
              <use xlink:href="/public/icons/dashboard-icons.svg#fig-dots-vertical"></use>
            </svg>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </a>
        </div>
        <div class="card-body px-md-4">
          <div ref="pieElement" style="height: 245px"></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Table Group -->
  <div class="row g-md-4 g-3 g-md-4">
    <div class="col-12 col-md-8">
      <div class="card">
        <div class="card-header d-flex justify-content-between px-md-4">
          <div>
            <h3 class="fs-6 text-db-netural lh-base mb-0">最新訂單</h3>
            <span class="text-db-netural-dark">平均 NT$45,010</span>
          </div>

          <a href="#" class="h-100" data-bs-toggle="dropdown" @click.prevent="">
            <svg width="24" height="24" class="text-db-netural-dark">
              <use xlink:href="/public/icons/dashboard-icons.svg#fig-dots-vertical"></use>
            </svg>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </a>
        </div>
        <!-- Table -->
        <div class="card-body table-responsive px-md-4">
          <table class="table table-db-background-light">
            <thead class="align-middle text-nowrap">
              <tr>
                <th scope="col" class="fw-normal py-3 pe-3">訂單編號 ( ID )</th>
                <th scope="col" class="fw-normal pe-3">成立時間</th>
                <th scope="col" class="fw-normal pe-3">商品數量</th>
                <th scope="col" class="fw-normal pe-3">是否付款</th>
                <th scope="col" class="fw-normal text-end pe-3">總金額 ( $ )</th>
                <th scope="col" class="fw-normal text-end pe-0">操作</th>
              </tr>
            </thead>
            <tbody class="align-middle text-nowrap">
              <tr>
                <td scope="row" class="pt-3 pe-3 border-0">
                  <div class="d-flex align-items-center" style="width: 200px">
                    <img
                      src="/public/尼耶里曙光G1.jpg"
                      class="border border-db-netural-dark rounded-2"
                      width="40"
                      height="40"
                      style="height: 40px; width: 40px"
                    />
                    <p class="mb-0 ms-2 text-truncate">1523539519</p>
                    <button class="btn link-db-netural-dark p-0 ms-2">
                      <svg width="20" height="20">
                        <use xlink:href="/public/icons/dashboard-icons.svg#fig-copy"></use>
                      </svg>
                    </button>
                  </div>
                </td>
                <td class="pt-3 pe-3 border-0">2024/10/10</td>
                <td class="pt-3 pe-3 border-0">10 件</td>
                <td class="pt-3 pe-3 border-0"><span class="tag tag-success">已付款</span></td>
                <td class="pt-3 pe-3 border-0 text-end">NT$ 13,400</td>
                <td class="pt-3 pe-0 border-0">
                  <div class="d-flex justify-content-end">
                    <button class="btn link-db-netural-dark p-0">
                      <svg width="20" height="20">
                        <use xlink:href="/public/icons/dashboard-icons.svg#fig-pen"></use>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td scope="row" class="pt-3 pe-3 border-0">
                  <div class="d-flex align-items-center" style="width: 200px">
                    <img
                      src="/public/尼耶里曙光G1.jpg"
                      class="border border-db-netural-dark rounded-2"
                      width="40"
                      height="40"
                      style="height: 40px; width: 40px"
                    />
                    <p class="mb-0 ms-2 text-truncate">1523539519</p>
                    <button class="btn link-db-netural-dark p-0 ms-2">
                      <svg width="20" height="20">
                        <use xlink:href="/public/icons/dashboard-icons.svg#fig-copy"></use>
                      </svg>
                    </button>
                  </div>
                </td>
                <td class="pt-3 pe-3 border-0">2024/10/10</td>
                <td class="pt-3 pe-3 border-0">10 件</td>
                <td class="pt-3 pe-3 border-0"><span class="tag tag-success">已付款</span></td>
                <td class="pt-3 pe-3 border-0 text-end">NT$ 13,400</td>
                <td class="pt-3 pe-0 border-0">
                  <div class="d-flex justify-content-end">
                    <button class="btn link-db-netural-dark p-0">
                      <svg width="20" height="20">
                        <use xlink:href="/public/icons/dashboard-icons.svg#fig-pen"></use>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td scope="row" class="pt-3 pe-3 border-0">
                  <div class="d-flex align-items-center" style="width: 200px">
                    <img
                      src="/public/尼耶里曙光G1.jpg"
                      class="border border-db-netural-dark rounded-2"
                      width="40"
                      height="40"
                      style="height: 40px; width: 40px"
                    />
                    <p class="mb-0 ms-2 text-truncate">1523539519</p>
                    <button class="btn link-db-netural-dark p-0 ms-2">
                      <svg width="20" height="20">
                        <use xlink:href="/public/icons/dashboard-icons.svg#fig-copy"></use>
                      </svg>
                    </button>
                  </div>
                </td>
                <td class="pt-3 pe-3 border-0">2024/10/10</td>
                <td class="pt-3 pe-3 border-0">10 件</td>
                <td class="pt-3 pe-3 border-0"><span class="tag tag-success">已付款</span></td>
                <td class="pt-3 pe-3 border-0 text-end">NT$ 13,400</td>
                <td class="pt-3 pe-0 border-0">
                  <div class="d-flex justify-content-end">
                    <button class="btn link-db-netural-dark p-0">
                      <svg width="20" height="20">
                        <use xlink:href="/public/icons/dashboard-icons.svg#fig-pen"></use>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td scope="row" class="pt-3 pe-3 border-0">
                  <div class="d-flex align-items-center" style="width: 200px">
                    <img
                      src="/public/尼耶里曙光G1.jpg"
                      class="border border-db-netural-dark rounded-2"
                      width="40"
                      height="40"
                      style="height: 40px; width: 40px"
                    />
                    <p class="mb-0 ms-2 text-truncate">1523539519</p>
                    <button class="btn link-db-netural-dark p-0 ms-2">
                      <svg width="20" height="20">
                        <use xlink:href="/public/icons/dashboard-icons.svg#fig-copy"></use>
                      </svg>
                    </button>
                  </div>
                </td>
                <td class="pt-3 pe-3 border-0">2024/10/10</td>
                <td class="pt-3 pe-3 border-0">10 件</td>
                <td class="pt-3 pe-3 border-0"><span class="tag tag-danger">未付款</span></td>
                <td class="pt-3 pe-3 border-0 text-end">NT$ 13,400</td>
                <td class="pt-3 pe-0 border-0">
                  <div class="d-flex justify-content-end">
                    <button class="btn link-db-netural-dark p-0">
                      <svg width="20" height="20">
                        <use xlink:href="/public/icons/dashboard-icons.svg#fig-pen"></use>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td scope="row" class="pt-3 pe-3 border-0">
                  <div class="d-flex align-items-center" style="width: 200px">
                    <img
                      src="/public/尼耶里曙光G1.jpg"
                      class="border border-db-netural-dark rounded-2"
                      width="40"
                      height="40"
                      style="height: 40px; width: 40px"
                    />
                    <p class="mb-0 ms-2 text-truncate">1523539519</p>
                    <button class="btn link-db-netural-dark p-0 ms-2">
                      <svg width="20" height="20">
                        <use xlink:href="/public/icons/dashboard-icons.svg#fig-copy"></use>
                      </svg>
                    </button>
                  </div>
                </td>
                <td class="pt-3 pe-3 border-0">2024/10/10</td>
                <td class="pt-3 pe-3 border-0">10 件</td>
                <td class="pt-3 pe-3 border-0"><span class="tag tag-success">已付款</span></td>
                <td class="pt-3 pe-3 border-0 text-end">NT$ 13,400</td>
                <td class="pt-3 pe-0 border-0">
                  <div class="d-flex justify-content-end">
                    <button class="btn link-db-netural-dark p-0">
                      <svg width="20" height="20">
                        <use xlink:href="/public/icons/dashboard-icons.svg#fig-pen"></use>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="card-footer bg-transparent border-top-0 px-md-4 d-flex justify-content-end">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous" @click.prevent>
                  <svg width="16" height="16">
                    <use xlink:href="/public/icons/dashboard-icons.svg#fig-left"></use>
                  </svg>
                </a>
              </li>
              <li class="page-item"><a class="page-link active" href="#" @click.prevent>1</a></li>
              <li class="page-item"><a class="page-link" href="#" @click.prevent>2</a></li>
              <li class="page-item"><a class="page-link" href="#" @click.prevent>3</a></li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next" @click.prevent>
                  <svg width="16" height="16">
                    <use xlink:href="/public/icons/dashboard-icons.svg#fig-right"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-4">
      <div class="card">
        <div class="card-header d-flex justify-content-between px-md-4">
          <div>
            <h3 class="fs-6 text-db-netural lh-base mb-0">銷售排行</h3>
            <span class="text-db-netural-dark">搶手商品前五名</span>
          </div>

          <a href="#" class="h-100" data-bs-toggle="dropdown" @click.prevent="">
            <svg width="24" height="24" class="text-db-netural-dark">
              <use xlink:href="/public/icons/dashboard-icons.svg#fig-dots-vertical"></use>
            </svg>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </a>
        </div>
        <div class="card-body px-md-4">
          <ul class="list-unstyled mb-0">
            <li class="d-flex align-items-center position-relative mb-3">
              <div>
                <img
                  src="/public/尼耶里曙光G1.jpg"
                  class="img-fluid border border-2 border-db-netural-dark rounded-1"
                  width="70"
                  height="70"
                />
              </div>
              <div class="ms-2 me-3">
                <h5 class="fs-8 text-db-netural text-truncate mb-1">斯里蘭卡海鹽</h5>
                <svg width="16" height="16" class="text-db-primary mb-1">
                  <use xlink:href="/public/icons/dashboard-icons.svg#fig-star-fill"></use>
                </svg>
                <svg width="16" height="16" class="text-db-primary mb-1">
                  <use xlink:href="/public/icons/dashboard-icons.svg#fig-star-fill"></use>
                </svg>
                <svg width="16" height="16" class="text-db-primary mb-1">
                  <use xlink:href="/public/icons/dashboard-icons.svg#fig-star-fill"></use>
                </svg>
                <svg width="16" height="16" class="text-db-primary mb-1">
                  <use xlink:href="/public/icons/dashboard-icons.svg#fig-star-fill"></use>
                </svg>
                <svg width="16" height="16" class="text-db-primary mb-1">
                  <use xlink:href="/public/icons/dashboard-icons.svg#fig-star-outline"></use>
                </svg>
                <p class="fs-9 text-db-netural-dark mb-0">NT$ 699</p>
              </div>
              <button type="button" class="btn link-db-netural-dark ms-auto p-0">
                <svg width="20" height="20">
                  <use xlink:href="/public/icons/dashboard-icons.svg#fig-pen"></use>
                </svg>
              </button>

              <!-- 排名 badge -->
              <div
                class="fs-9 bg-chart-red text-db-netural-background-light fw-bold rounded-1 px-1 position-absolute top-0 start-0 translate-middle"
              >
                Top 1
              </div>
            </li>
            <li class="d-flex align-items-center position-relative mb-3">
              <div>
                <img
                  src="/public/尼耶里曙光G1.jpg"
                  class="img-fluid border border-2 border-db-netural-dark rounded-1"
                  width="70"
                  height="70"
                />
              </div>
              <div class="ms-2 me-3">
                <h5 class="fs-8 text-db-netural text-truncate mb-1">斯里蘭卡海鹽</h5>
                <svg width="16" height="16" class="text-db-primary mb-1">
                  <use xlink:href="/public/icons/dashboard-icons.svg#fig-star-fill"></use>
                </svg>
                <svg width="16" height="16" class="text-db-primary mb-1">
                  <use xlink:href="/public/icons/dashboard-icons.svg#fig-star-fill"></use>
                </svg>
                <svg width="16" height="16" class="text-db-primary mb-1">
                  <use xlink:href="/public/icons/dashboard-icons.svg#fig-star-fill"></use>
                </svg>
                <svg width="16" height="16" class="text-db-primary mb-1">
                  <use xlink:href="/public/icons/dashboard-icons.svg#fig-star-fill"></use>
                </svg>
                <svg width="16" height="16" class="text-db-primary mb-1">
                  <use xlink:href="/public/icons/dashboard-icons.svg#fig-star-outline"></use>
                </svg>
                <p class="fs-9 text-db-netural-dark mb-0">NT$ 699</p>
              </div>
              <button type="button" class="btn link-db-netural-dark ms-auto p-0">
                <svg width="20" height="20">
                  <use xlink:href="/public/icons/dashboard-icons.svg#fig-pen"></use>
                </svg>
              </button>

              <!-- 排名 badge -->
              <div
                class="fs-9 bg-chart-yellow text-db-netural-background-light fw-bold rounded-1 px-1 position-absolute top-0 start-0 translate-middle"
              >
                Top 1
              </div>
            </li>
            <li class="d-flex align-items-center position-relative mb-3">
              <div>
                <img
                  src="/public/尼耶里曙光G1.jpg"
                  class="img-fluid border border-2 border-db-netural-dark rounded-1"
                  width="70"
                  height="70"
                />
              </div>
              <div class="ms-2 me-3">
                <h5 class="fs-8 text-db-netural text-truncate mb-1">斯里蘭卡海鹽</h5>
                <svg width="16" height="16" class="text-db-primary mb-1">
                  <use xlink:href="/public/icons/dashboard-icons.svg#fig-star-fill"></use>
                </svg>
                <svg width="16" height="16" class="text-db-primary mb-1">
                  <use xlink:href="/public/icons/dashboard-icons.svg#fig-star-fill"></use>
                </svg>
                <svg width="16" height="16" class="text-db-primary mb-1">
                  <use xlink:href="/public/icons/dashboard-icons.svg#fig-star-fill"></use>
                </svg>
                <svg width="16" height="16" class="text-db-primary mb-1">
                  <use xlink:href="/public/icons/dashboard-icons.svg#fig-star-fill"></use>
                </svg>
                <svg width="16" height="16" class="text-db-primary mb-1">
                  <use xlink:href="/public/icons/dashboard-icons.svg#fig-star-outline"></use>
                </svg>
                <p class="fs-9 text-db-netural-dark mb-0">NT$ 699</p>
              </div>
              <button type="button" class="btn link-db-netural-dark ms-auto p-0">
                <svg width="20" height="20">
                  <use xlink:href="/public/icons/dashboard-icons.svg#fig-pen"></use>
                </svg>
              </button>

              <!-- 排名 badge -->
              <div
                class="fs-9 bg-chart-purple text-db-netural-background-light fw-bold rounded-1 px-1 position-absolute top-0 start-0 translate-middle"
              >
                Top 1
              </div>
            </li>
            <li class="d-flex align-items-center position-relative mb-3">
              <div>
                <img
                  src="/public/尼耶里曙光G1.jpg"
                  class="img-fluid border border-2 border-db-netural-dark rounded-1"
                  width="70"
                  height="70"
                />
              </div>
              <div class="ms-2 me-3">
                <h5 class="fs-8 text-db-netural text-truncate mb-1">斯里蘭卡海鹽</h5>
                <svg width="16" height="16" class="text-db-primary mb-1">
                  <use xlink:href="/public/icons/dashboard-icons.svg#fig-star-fill"></use>
                </svg>
                <svg width="16" height="16" class="text-db-primary mb-1">
                  <use xlink:href="/public/icons/dashboard-icons.svg#fig-star-fill"></use>
                </svg>
                <svg width="16" height="16" class="text-db-primary mb-1">
                  <use xlink:href="/public/icons/dashboard-icons.svg#fig-star-fill"></use>
                </svg>
                <svg width="16" height="16" class="text-db-primary mb-1">
                  <use xlink:href="/public/icons/dashboard-icons.svg#fig-star-fill"></use>
                </svg>
                <svg width="16" height="16" class="text-db-primary mb-1">
                  <use xlink:href="/public/icons/dashboard-icons.svg#fig-star-outline"></use>
                </svg>
                <p class="fs-9 text-db-netural-dark mb-0">NT$ 699</p>
              </div>
              <button type="button" class="btn link-db-netural-dark ms-auto p-0">
                <svg width="20" height="20">
                  <use xlink:href="/public/icons/dashboard-icons.svg#fig-pen"></use>
                </svg>
              </button>

              <!-- 排名 badge -->
              <div
                class="fs-9 bg-chart-orange text-db-netural-background-light fw-bold rounded-1 px-1 position-absolute top-0 start-0 translate-middle"
              >
                Top 1
              </div>
            </li>
            <li class="d-flex align-items-center position-relative">
              <div>
                <img
                  src="/public/尼耶里曙光G1.jpg"
                  class="img-fluid border border-2 border-db-netural-dark rounded-1"
                  width="70"
                  height="70"
                />
              </div>
              <div class="ms-2 me-3">
                <h5 class="fs-8 text-db-netural text-truncate mb-1">斯里蘭卡海鹽</h5>
                <svg width="16" height="16" class="text-db-primary mb-1">
                  <use xlink:href="/public/icons/dashboard-icons.svg#fig-star-fill"></use>
                </svg>
                <svg width="16" height="16" class="text-db-primary mb-1">
                  <use xlink:href="/public/icons/dashboard-icons.svg#fig-star-fill"></use>
                </svg>
                <svg width="16" height="16" class="text-db-primary mb-1">
                  <use xlink:href="/public/icons/dashboard-icons.svg#fig-star-fill"></use>
                </svg>
                <svg width="16" height="16" class="text-db-primary mb-1">
                  <use xlink:href="/public/icons/dashboard-icons.svg#fig-star-fill"></use>
                </svg>
                <svg width="16" height="16" class="text-db-primary mb-1">
                  <use xlink:href="/public/icons/dashboard-icons.svg#fig-star-outline"></use>
                </svg>
                <p class="fs-9 text-db-netural-dark mb-0">NT$ 699</p>
              </div>
              <button type="button" class="btn link-db-netural-dark ms-auto p-0">
                <svg width="20" height="20">
                  <use xlink:href="/public/icons/dashboard-icons.svg#fig-pen"></use>
                </svg>
              </button>

              <!-- 排名 badge -->
              <div
                class="fs-9 bg-chart-green text-db-netural-background-light fw-bold rounded-1 px-1 position-absolute top-0 start-0 translate-middle"
              >
                Top 1
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import usePie from '@/composables/usePie';
import useLine from '@/composables/useLine';

// 圓餅圖
const pieElement = ref(null);
onMounted(() => {
  const { setOption } = usePie(pieElement.value);
  setOption([
    { value: 1048, name: '淺烘焙' },
    { value: 735, name: '中烘焙' },
    { value: 580, name: '深烘焙' },
    { value: 484, name: '咖啡用具' },
  ]);
});

// 折線圖
const lineElement = ref(null);
onMounted(() => {
  const { setOption } = useLine(lineElement.value);
  setOption([820, 932, 901, 934, 1290, 1330, 1320]);
});
</script>

<style lang="scss" scoped></style>
