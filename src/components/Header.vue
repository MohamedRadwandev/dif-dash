<template>
    <header class="theShadow"  :class="{active:menuOpened}">
		<div class="myContainer clearfix">
			<div class="navIcon" @click="toggleMenu">
				<span></span>
				<span></span>
				<span></span>
			</div>	
			<h1 class="logo pull-left">
				<a href="#">
					<img src="images/logo.png">
				</a>
			</h1>
			<div class="userprofile pull-right">
				<img src="images/profile.png">
				<span>Leon P.</span>
				<!-- <i class="fas fa-angle-down"></i> -->
                <font-awesome-icon icon="angle-down" />
			</div>
			<nav class="pull-right">
				<ul>
					<li class="active"><a href="#">account</a></li>
					<li><a href="#">support</a></li>
					<li><a href="#">packages</a></li>
					<li><a href="#">billing</a></li>
				</ul>
			</nav>
		</div>
	</header>
</template>

<script>
export default {
    data:function(){
        return{
            menuOpened:false
        }
    },
    methods:{
        toggleMenu(){
            this.menuOpened = !this.menuOpened;
        }
    }
}
</script>

