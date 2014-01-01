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
define('DB_NAME', 'test10');

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
define('AUTH_KEY',         'r8ZIt45Rax);#R?/<}E`LjcYqxpc[-=pu6=a]tfRgrNk@KPWRJ}7#RDB<fxrtnF3');
define('SECURE_AUTH_KEY',  'WV8ywpBr+dt,7|V#0O:67;Hqw%a|!Z<jx~e1C]Jmh|y&x->&g2xyvDJZs|14=~p%');
define('LOGGED_IN_KEY',    'g(SXv5qiudzyhy2_izOnz9cN)vI{wV*.9Eq+<o3lHBKWNte;9ks}4dK:eD&bj_YF');
define('NONCE_KEY',        'rn4|Nb}R.bZ|83<l]d9f#S+<}&*Q6gDxjEls~^PF{,!fm2M|I|-!m&ng2T(7~)@A');
define('AUTH_SALT',        'k^M?=0a&8FI]u.,9r=`5CEI8wprakr6O*Sk1s ^*aOA@{H|}`kz(D0,=Pq1)`)=t');
define('SECURE_AUTH_SALT', '~ZtY,mvCtnXC(-on7v*[3=6nK-111S6h,%oF8WL^Er9nxe9Oe%:TaN[H^zy@x(~t');
define('LOGGED_IN_SALT',   'j@ZJ5+iC/Yb^Sd_.(!Xj?Af#6wCDLH-DBRnCE-UM@pg,1>-[U.B+#JGL9sfP;R7`');
define('NONCE_SALT',       'dXAOVj$a*=W>$MQ,i]rQ4V^!wWz)KKS01Th{Ulm}Pkw:k+aH(:j,,V7P0h0CDM;b');

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
