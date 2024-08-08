import React from 'react'
import g01 from "./../../images/gallery/gallery-01.jpg"
import g001 from "./../../images/gallery/gallery-01-01.jpg"
import "./gallery.css";
export default function Gallery() {
  return (
    <div>
      <div class="container-fluid bg-light mygaly content-inner">
			<div class="gallery-wrapper" id="lightgallery2">
				<div class="gallery-col">
					<div class="gallery-item m-b30">
						<div class="insta-post dz-media dz-img-effect overlay-layer post1">
							<a href={g01} data-src={g001} class="lg-item" data-lg-id="357cfc37-c102-463c-9b27-698b35bebe93">
								<img src={g01} alt="/"/>
								<i class="meta-icon fa-solid fa-plus"></i>
							</a>
						</div>
					</div>
					<div class="gallery-item m-b30">
						<div class="insta-post dz-media dz-img-effect overlay-layer post2">
							<a href="images/gallery/gallery-02.jpg" data-src="images/gallery/gallery-02-02.jpg" class="dz-media lg-item" data-lg-id="8dcd9b9f-ce38-4d4c-bd41-65d6ac0b013d">
								<img src={g01} alt="/"/>
								<i class="meta-icon fa-solid fa-plus"></i>
							</a>
						</div>
					</div>
					<div class="gallery-item">
						<div class="insta-post dz-media dz-img-effect overlay-layer post3">
							<a href="images/gallery/gallery-03.jpg" data-src="images/gallery/gallery-03-03.jpg" class="dz-media lg-item" data-lg-id="4caaca71-2948-489b-b70f-09d65ada967d">
								<img src={g01}alt="/"/>
								<i class="meta-icon fa-solid fa-plus"></i>
							</a>
						</div>
					</div>
					<div class="gallery-item">
						<div class="insta-post dz-media dz-img-effect overlay-layer post4">
							<a href="images/gallery/gallery-04.jpg" data-src="images/gallery/gallery-04-04.jpg" class="dz-media lg-item" data-lg-id="52efde17-3a2e-4758-9abe-727b8460c641">
								<img src={g01} alt="/"/>
								<i class="meta-icon fa-solid fa-plus"></i>
							</a>
						</div>
					</div>
				</div>
				<div class="gallery-col-2">
					<div class="gallery-item">
						<div class="insta-post dz-media dz-img-effect overlay-layer post5">
							<a src={g01} data-src="images/gallery/gallery-05-05.jpg" class="dz-media lg-item" data-lg-id="bcb3c954-e009-457e-86b1-aa07f1e6842a">
								<img src={g01} alt="/"/>
								<i class="meta-icon fa-solid fa-plus"></i>
							</a>
						</div>
					</div>	
				</div>
				<div class="gallery-col">
					<div class="gallery-item m-b30">
						<div class="insta-post dz-media dz-img-effect overlay-layer post6">
							<a src={g01} data-src="images/gallery/gallery-06-06.jpg" class="dz-media lg-item" data-lg-id="8ca7c302-f7cb-498c-8799-3f7966ba8a43">
							<img src={g01} alt="/"/>
							<i class="meta-icon fa-solid fa-plus"></i>
						</a>
						</div>
					</div>
					<div class="gallery-item m-b30">
						<div class="insta-post dz-media dz-img-effect overlay-layer post7">
							<a href="images/gallery/gallery-01.jpg" data-src="images/gallery/gallery-01-01.jpg" class="dz-media lg-item" data-lg-id="71027765-a142-42b8-a333-b984938cc3e2">
								<img src={g01} alt="/"/>
								<i class="meta-icon fa-solid fa-plus"></i>
							</a>
						</div>
					</div>
					<div class="gallery-item">
						<div class="insta-post dz-media dz-img-effect overlay-layer post8">
							<a href="images/gallery/gallery-07.jpg" data-src="images/gallery/gallery-07-07.jpg" class="dz-media lg-item" data-lg-id="244c4d05-e3b8-4ae1-b641-1f4627d58bbf">
								<img src={g01} alt="/"/>
								<i class="meta-icon fa-solid fa-plus"></i>
							</a>
						</div>
					</div>
					<div class="gallery-item">
						<div class="insta-post dz-media dz-img-effect overlay-layer post9">
							<a href="images/gallery/gallery-08.jpg" data-src="images/gallery/gallery-08-08.jpg" class="dz-media lg-item" data-lg-id="89040124-8aa2-4e79-9d36-82f141fc88d3">
								<img src={g01} alt="/"/>
								<i class="meta-icon fa-solid fa-plus"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
    </div>
  )
}
