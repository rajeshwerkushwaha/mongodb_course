#!/bin/bash

# OS VERSION: Ubuntu Server 14.04.x LTS
# ARCH: x32_64

# Project Fedena Automated Installation Script
# =============================================
#
#    This program is free software: you can redistribute it and/or modify
#    it under the terms of the GNU General Public License as published by
#    the Free Software Foundation, either version 3 of the License, or
#    (at your option) any later version.
#
#    This program is distributed in the hope that it will be useful,
#    but WITHOUT ANY WARRANTY; without even the implied warranty of
#    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#    GNU General Public License for more details.
#
#    You should have received a copy of the GNU General Public License
#    along with this program.  If not, see <http://www.gnu.org/licenses/>.

# First we check if the user is 'root' before allowing installation to commence
if [ $UID -ne 0 ]; then
    echo "Install failed! To install you must be logged in as 'root', please try again."
    exit 1
fi

# Ensure the installer is launched and can only be launched on Ubuntu 12.04
BITS=$(uname -m | sed 's/x86_//;s/i[3-6]86/32/')
if [ -f /etc/lsb-release ]; then
  OS=$(cat /etc/lsb-release | grep DISTRIB_ID | sed 's/^.*=//')
  VER=$(cat /etc/lsb-release | grep DISTRIB_RELEASE | sed 's/^.*=//')
else
  OS=$(uname -s)
  VER=$(uname -r)
fi
echo "Detected : $OS  $VER  $BITS"
if [ "$OS" = "Ubuntu" ] && [ "$VER" = "14.04" ]; then
  echo "Ok."
else
  echo "Sorry. We have detected that you are NOT running Ubuntu 14.04.*" 
  echo "Installation halted!"
  exit 1;
fi

# Display the 'welcome' splash/user warning info..
echo -e ""
echo -e "##############################################################"
echo -e "# Welcome to the Fedena 2.3 Auto Installer for Ubuntu        #"
echo -e "# Server 14.04.x LTS                                         #"
echo -e "#                                                            #"
echo -e "# Please make sure your VPS provider hasn't pre-installed    #"
echo -e "# any Ruby or MySQL packages.                                #"
echo -e "#                                                            #"
echo -e "# If you are installing on a physical machine where the OS   #"
echo -e "# has been installed by yourself please make sure you only   #"
echo -e "# installed Ubuntu Server with no extra packages.            #"
echo -e "#                                                            #"
echo -e "# If you selected additional options during the Ubuntu       #"
echo -e "# install please consider reinstalling without them.         #"
echo -e "#                                                            #"
echo -e "# For support, e-mail: n3rve@n3rve.com                       #"
echo -e "#                                                            #"
echo -e "##############################################################"
echo -e ""

sleep 15

# Update Package Index
apt-get update

# Install Dependencies
apt-get install -y gawk g++ gcc make libc6-dev libreadline6-dev zlib1g-dev libssl-dev libyaml-dev libsqlite3-dev sqlite3 autoconf libgdbm-dev libncurses5-dev automake libtool bison pkg-config libffi-dev unzip

apt-get install -y gcc-4.4 g++-4.4


# Install Ruby 1.8
cd /tmp && wget http://cache.ruby-lang.org/pub/ruby/1.8/ruby-1.8.7-p374.tar.gz
tar -xzvf ruby-1.8.7-p374.tar.gz
cd ruby-1.8.7-p374
./configure
make CC=gcc-4.4
make install 

# Install Rubygems 1.3.7 
cd /tmp && wget http://production.cf.rubygems.org/rubygems/rubygems-1.3.7.tgz
tar -xzvf rubygems-1.3.7.tgz
cd rubygems-1.3.7
ruby setup.rb

cd $home
# Install MySQL Server / Adapter
echo "Installing the MySQL server ..."
sleep 2
export DEBIAN_FRONTEND=noninteractive
apt-get -q -y install  mysql-server mysql-client libmysqlclient-dev
sleep 3
mysqladmin -u root password foradian
echo "MySQL password set as 'foradian'"
sleep 2

echo "Updating GEMs:"
gem install rails -v=2.3.5 --no-ri --no-rdoc
gem uninstall rake -Iax
gem install rake -v=0.8.7 --no-ri --no-rdoc
gem install mysql --no-ri --no-rdoc
gem install i18n -v 0.4.2 --no-ri --no-rdoc
gem install rush -v 0.6.8 --no-ri --no-rdoc
gem install mongrel -v=1.1.5 --no-ri --no-rdoc

# We securely download Fedena from the content distribution network at n3rve.com
echo "Connecting to n3rve.com | Downloading Project Fedena 2.3"
sleep 2
echo "Access credentials sent"
sleep 2
wget http://cdn.n3rve.com/secure/dl/fedena/2.3/fedena_2.3.zip --user=fedena23 --password='vEf879AC5vp44Ab'
sleep 3
echo "Un-archiving & preparing Fedena for installation"
sleep 2
unzip fedena_2.3.zip
cd ~/fedena-v2.3-bundle-linux/
sleep 1
rake gems:install
echo "Creating Database"
rake db:create
sleep 1
echo "Executing migrating task!"
rake db:migrate
sleep 2
echo "Populating MySQL Tables"
rake fedena:plugins:install_all
sleep 2 
echo "Cleaning up ..."
sleep 3
rm ../fedena_2.3.zip
echo "Fixing Permissions ..."
sleep 1
chmod +x script*
sleep 1
echo "Starting a GNU Screen session"
sleep 2
screen -d -m mongrel_rails start -e production
echo "Installation complete. Visit http://<your-server-ip.com:3000"
echo "Login with admin / admin123."
echo "For the professional version of Fedena, contact: n3rve@n3rve.com"
cd ../ && rm -- "$0"
