-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 16, 2020 at 11:14 AM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.1.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `triveous`
--

-- --------------------------------------------------------

--
-- Table structure for table `bookmarks`
--

CREATE TABLE `bookmarks` (
  `id` int(11) NOT NULL,
  `link` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `tags` varchar(255) NOT NULL,
  `publisher` varchar(255) NOT NULL,
  `time_created` datetime NOT NULL,
  `time_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bookmarks`
--

INSERT INTO `bookmarks` (`id`, `link`, `title`, `tags`, `publisher`, `time_created`, `time_updated`) VALUES
(8, 'link', 'title', 'publisher,,', 'tags', '0000-00-00 00:00:00', '2020-04-16 02:42:28'),
(9, 'link', 'title', 'publisher', 'tags', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, 'link', 'title', 'publisher', 'tags', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(11, 'link', 'title', 'publisher', 'tags', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(12, 'link', 'title', 'publisher', 'tags', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(13, 'link', 'title', 'publisher', 'tags', '2020-04-16 01:16:26', '0000-00-00 00:00:00'),
(14, 'link', 'title', 'publisher', 'abc,def', '2020-04-16 01:26:00', '0000-00-00 00:00:00'),
(15, 'link', 'title', 'publisher', 'abc,def', '2020-04-16 01:28:19', '0000-00-00 00:00:00'),
(16, 'link', 'title', 'publisher', '', '2020-04-16 01:28:34', '0000-00-00 00:00:00'),
(17, 'link', 'title', 'publisher', '', '2020-04-16 01:30:38', '0000-00-00 00:00:00'),
(18, 'link', 'title', 'publisher', '', '2020-04-16 01:31:39', '0000-00-00 00:00:00'),
(19, 'link', 'title', 'publisher', '', '2020-04-16 01:34:20', '0000-00-00 00:00:00'),
(20, 'link', 'title', 'publisher', '', '2020-04-16 01:39:43', '0000-00-00 00:00:00'),
(21, 'link', 'title', 'publisher', '', '2020-04-16 01:41:41', '0000-00-00 00:00:00'),
(22, 'link', 'title', 'publisher', '', '2020-04-16 01:41:52', '0000-00-00 00:00:00'),
(23, 'link', 'title', 'publisher', '', '2020-04-16 01:42:14', '0000-00-00 00:00:00'),
(24, 'link', 'title', 'publisher', '', '2020-04-16 01:42:32', '0000-00-00 00:00:00'),
(25, 'link', 'title', 'publisher', '', '2020-04-16 01:42:53', '0000-00-00 00:00:00'),
(26, 'link', 'title', 'publisher', '', '2020-04-16 01:42:59', '0000-00-00 00:00:00'),
(27, 'link', 'title', 'publisher', '', '2020-04-16 01:43:03', '0000-00-00 00:00:00'),
(28, 'link', 'title', 'publisher', '', '2020-04-16 01:57:40', '0000-00-00 00:00:00'),
(29, 'link', 'title', 'publisher', '', '2020-04-16 01:58:04', '0000-00-00 00:00:00'),
(30, 'link', 'title', 'publisher', '', '2020-04-16 01:59:45', '0000-00-00 00:00:00'),
(31, 'link', 'title', 'publisher', '', '2020-04-16 02:00:16', '0000-00-00 00:00:00'),
(32, 'link', 'titsle', 'publisher', '', '2020-04-16 02:01:08', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `tags`
--

CREATE TABLE `tags` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `time_created` datetime NOT NULL,
  `time_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tags`
--

INSERT INTO `tags` (`id`, `title`, `time_created`, `time_updated`) VALUES
(5, 'titsle', '2020-04-16 02:11:21', '0000-00-00 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bookmarks`
--
ALTER TABLE `bookmarks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tags`
--
ALTER TABLE `tags`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bookmarks`
--
ALTER TABLE `bookmarks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `tags`
--
ALTER TABLE `tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
