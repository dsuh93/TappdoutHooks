# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  birthday        :string           not null
#  country         :string           not null
#  location        :string
#  gender          :string
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  validates :username,
    :first_name,
    :last_name,
    :birthday, :country,
    :email,
    :session_token,
    :password_digest, 
    presence: true 

  validates :session_token, :email, :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validate :check_email

  attr_reader :password 
  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.is_password?(password)
    user
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.update!(session_token: self.class.generate_session_token)
    self.session_token 
  end

  private

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token 
  end

  def check_email
    handle, website = self.email.split("@")
    handle_exists = handle.length > 0
    website_legit = website.split(".").length == 2
    errors[:email] << "please enter a valid email address" unless handle_exists && website_legit 
  end
end
