<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', '1389313881s');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 */
define('AUTH_KEY',         '`b|F=?$o(}n_J_TJr|x>;6N`yaW9V^kU!%-9no ]6f_nJ?*e9w)u*e!oa-nd&Z9p');
define('SECURE_AUTH_KEY',  '#pE.>f(Q ]n,F,qBub0/(-vKlM)Ki`%St/S-1Tc#KE9+C<`p_XC[&E0oYv|g+8)b');
define('LOGGED_IN_KEY',    'x.##XoQ| 7ec_@-]KSmIz@K#%yh)UA+CdaNQ;gJ/!e5L,KsWI9wAo=<w)GR2=m|+');
define('NONCE_KEY',        'JSX-euZ$]IExzO9*DVf;l];dg!k*:Tml*:r+_]Y4]d-10oTl@[g~E@+BZ~sy#DGL');
define('AUTH_SALT',        '5SPVOHfI}rqF1OJ1FI804|n+dw|)Jci!N}2uYu/7N<-|$]u-hDfD.I+#{Lq&V0<c');
define('SECURE_AUTH_SALT', 'ny216~^{.Qxm]$PKn3UKz[&xr50L*P(Z, ?[&,Nz-+oW-,8%Fz)ouJ|/)=P-H JI');
define('LOGGED_IN_SALT',   'BIknJmQ4hI]Qm*Q+ak5l2`n|Iw~]Iml)i+F0t_qwrb3_u.K}AOtmm;+yxw+<.D+*');
define('NONCE_SALT',       '4A[RaC{G%4zTlmYcSU1wU,TYqY1hu+ZArVl+Ds5[w>1=m;Oz$2TM27(x4lxUQU~-');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');



/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
