class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token

  helper_method :users_columns, :ensure_logged_in, :logged_in?, :current_user

  def users_columns
    [:username, :first_name, :last_name, :birthday, :country, :location, :gender, :email]
  end

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def login!(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def logged_in?
    !!current_user
  end

  def logout!
    current_user.reset_session_token! 
    session[:session_token] = nil
  end

  private 
  def ensure_logged_in
    redirect_to new_session_url unless logged_in?
  end
end
