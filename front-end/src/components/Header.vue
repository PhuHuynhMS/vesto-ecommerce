<template>
  <header class="header bg-white shadow-sm">
    <div class="container-fluid">
      <div class="d-flex justify-content-between align-items-center py-3">
        <!-- Logo -->
        <div class="logo">
          <router-link to="/" class="text-decoration-none">
            <img
              src="./../assets/logo.svg"
              alt="Fashion Shop Logo"
              class="img-fluid"
            />
          </router-link>
        </div>

        <!-- Navigation Menu -->
        <nav class="nav-menu d-none d-lg-flex gap-4">
          <router-link to="/products" class="nav-link">Products</router-link>
          <router-link to="/shop" class="nav-link">Underwears</router-link>
          <router-link to="/about" class="nav-link">Activewears</router-link>
          <router-link to="/contact" class="nav-link"
            >Daily outfits</router-link
          >
        </nav>

        <!-- Search Bar -->
        <div class="search-bar d-none d-lg-flex align-items-center">
          <input
            type="text"
            class="form-control"
            placeholder="Search for products..."
            v-model="searchQuery"
            @keyup.enter="search"
          />
          <button class="btn btn-dark ms-2" @click="search" aria-label="Search">
            <FontAwesomeIcon :icon="faSearch" />
          </button>
        </div>

        <!-- User Actions -->
        <div class="user-actions d-flex gap-3 align-items-center">
          <router-link to="/wishlist" class="icon-link">
            <FontAwesomeIcon :icon="faHeart" />
            <span v-if="wishlistCount > 0" class="badge bg-danger">{{
              wishlistCount
            }}</span>
          </router-link>
          <router-link to="/cart" class="icon-link">
            <FontAwesomeIcon :icon="faShoppingCart" />
            <span v-if="cartCount > 0" class="badge bg-danger">{{
              cartCount
            }}</span>
          </router-link>
          <router-link to="/profile" class="icon-link">
            <i class="fas fa-user"></i>
          </router-link>
        </div>

        <!-- Mobile Menu Toggle -->
        <button
          class="mobile-menu-toggle d-lg-none btn btn-outline-dark"
          @click="toggleMobileMenu"
          aria-label="Toggle Menu"
        >
          <i class="fas fa-bars"></i>
        </button>
      </div>

      <!-- Mobile Menu -->
      <transition name="fade">
        <div v-if="isMobileMenuOpen" class="mobile-menu d-lg-none">
          <div class="d-flex flex-column gap-2">
            <router-link to="/" class="nav-link" @click="closeMobileMenu"
              >Home</router-link
            >
            <router-link to="/shop" class="nav-link" @click="closeMobileMenu"
              >Shop</router-link
            >
            <router-link to="/about" class="nav-link" @click="closeMobileMenu"
              >About Us</router-link
            >
            <router-link to="/contact" class="nav-link" @click="closeMobileMenu"
              >Contact</router-link
            >
          </div>
          <div class="mt-3">
            <input
              type="text"
              class="form-control"
              placeholder="Search for products..."
              v-model="searchQuery"
              @keyup.enter="search"
            />
            <button class="btn w-100 mt-2" @click="search">
              <FontAwesomeIcon :icon="faSearch" /> Search
            </button>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const router = useRouter();
const searchQuery = ref<string>('');
const wishlistCount = ref<number>(2); // Cần lấy từ Pinia nếu dữ liệu động
const cartCount = ref<number>(3); // Cần lấy từ Pinia nếu dữ liệu động
const isMobileMenuOpen = ref<boolean>(false);

const search = (): void => {
  if (searchQuery.value.trim()) {
    router.push({ path: '/search', query: { q: searchQuery.value } });
  }
};

const toggleMobileMenu = (): void => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = (): void => {
  isMobileMenuOpen.value = false;
};
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: #fff;
}

.logo img {
  height: 50px;
}

.nav-link {
  color: #000;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #007bff;
}

.icon-link {
  position: relative;
  color: #000;
  text-decoration: none;
  font-size: 1.5rem;
}

.icon-link .badge {
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  font-size: 0.75rem;
}

.mobile-menu {
  padding: 15px;
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 992px) {
  .mobile-menu-toggle {
    display: block;
  }
}
</style>
