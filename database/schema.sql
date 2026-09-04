-- ============================================
-- SajiloHub — Database Schema
-- Run this script to set up the MySQL database
-- ============================================

CREATE DATABASE IF NOT EXISTS sajilohub
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE sajilohub;

-- Users table
CREATE TABLE IF NOT EXISTS users (
  id            INT AUTO_INCREMENT PRIMARY KEY,
  full_name     VARCHAR(255) NOT NULL,
  email         VARCHAR(255) NOT NULL UNIQUE,
  password      VARCHAR(255) NULL,                            -- NULL for Google-only accounts
  auth_provider ENUM('local', 'google') NOT NULL DEFAULT 'local',
  google_id     VARCHAR(255) NULL,
  created_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

  -- Indexes for faster lookups
  INDEX idx_email (email),
  INDEX idx_google_id (google_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
