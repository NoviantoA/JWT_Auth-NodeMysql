-- phpMyAdmin SQL Dump
-- version 5.3.0-dev+20220619.196dad2777
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 05, 2022 at 08:03 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jwt_auth`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `refresh_token` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `refresh_token`, `createdAt`, `updatedAt`) VALUES
(1, 'M. Novianto Anggoro', 'novianto@gmail.com', '$2b$10$DmZjlk5/LXeid5Qvs4EBvecyP/l8YPp6XF0RispEBQfGlDtmJaLbS', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsIm5hbWUiOiJNLiBOb3ZpYW50byBBbmdnb3JvIiwiZW1haWwiOiJub3ZpYW50b0BnbWFpbC5jb20iLCJpYXQiOjE2NTk2MTU5MjIsImV4cCI6MTY1OTcwMjMyMn0.3qgt24gZps1-cfshXKop76JUClgyiq8cZPJGjcswD5U', '2022-07-24 16:41:36', '2022-08-04 12:25:22'),
(4, '', '', '$2b$10$odn4J2nqa5nTLJ4ngnlUBOSyTV9jTCpAyIYp8PvYNEwSBkv79kY/q', NULL, '2022-08-04 09:41:09', '2022-08-04 09:41:09'),
(5, 'John Terry', 'john@gmail.com', '$2b$10$2X/2LtFKqWAWjtwqrGsT9eQ7moRfKRtW5JQDihlvQdYKtrn2BIopy', NULL, '2022-08-04 09:52:39', '2022-08-04 09:52:39'),
(6, 'John Terry', 'john@gmail.com', '$2b$10$eZJnxDlLcwWFSF3lcGt9PubZQPUpQRfh2Mqs0pgv6QeoSBRjy1UKW', NULL, '2022-08-04 09:52:44', '2022-08-04 09:52:44'),
(7, 'John Terry', 'john@gmail.com', '$2b$10$ArjihxP/yYLYPdKAGjDSfOtvwIGGNBibsKQfjUh9V2SXIMm5NvDZi', NULL, '2022-08-04 09:53:15', '2022-08-04 09:53:15'),
(8, 'John Terry', 'john@gmail.com', '$2b$10$/zaWSvOkOlljTi6DdzkjV.BuSk7IzkzvkAo4PDF7HI9XAZh8MNSTy', NULL, '2022-08-04 09:53:18', '2022-08-04 09:53:18'),
(9, 'John Terry', 'john@gmail.com', '$2b$10$1cFfNwXH7RmzGgjbHavFWO29w1ko3N4oHI6uT4lthiKxWiWp2paxS', NULL, '2022-08-04 09:53:19', '2022-08-04 09:53:19'),
(10, 'John Terry', 'john@gmail.com', '$2b$10$s3syhpOxsTpAIZiitb0gme2YZKVAiop802QR82wzh2lM/RykY3LVO', NULL, '2022-08-04 09:53:20', '2022-08-04 09:53:20'),
(11, 'John Terry', 'john@gmail.com', '$2b$10$6J6JUcmYip8HRhAOxwIV8uB.sJ0UliIfBnqGBmjjrTBP2EnkmYCpG', NULL, '2022-08-04 09:53:20', '2022-08-04 09:53:20'),
(12, 'John Terry', 'john@gmail.com', '$2b$10$LeJ8nFk47tFyiGF5WICtwO.RmPm.QyhfsyloHy9ybv2BGeq/T5m4q', NULL, '2022-08-04 09:53:20', '2022-08-04 09:53:20'),
(16, 'Jono', 'jono@gmail.com', '$2b$10$xOOPUY3rITJumczFLyyQ9.meJaC/5g81PH8ptK/i7LAqSQwztkjYG', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE2LCJuYW1lIjoiSm9ubyIsImVtYWlsIjoiam9ub0BnbWFpbC5jb20iLCJpYXQiOjE2NTk2MjQ2OTgsImV4cCI6MTY1OTcxMTA5OH0.VQVL2hVONEINxInlkptEjtQYqPhE7kiJcAUNFOnMe5A', '2022-08-04 09:55:42', '2022-08-04 14:51:38');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;



