import { supabase } from './supabaseClient'

/**
 * Sign up with email, password, and role-specific data
 * @param {string} email - User email
 * @param {string} password - User password
 * @param {object} userData - User-specific data
 * @param {string} role - 'patient' | 'doctor' | 'hospital'
 */
export const signUp = async (email, password, userData, role = 'patient') => {
  try {
    // Create auth user with role in metadata
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          role: role,
          first_name: userData.firstName || userData.facilityName,
          last_name: userData.lastName || ''
        }
      }
    })

    if (error) throw error

    // Store role-specific data in profiles table with role field
    if (data.user) {
      const profileData = {
        id: data.user.id,
        role: role,
        email: email,
        ...userData
      }

      await updateProfile(data.user.id, profileData)
    }

    return { data, error: null }
  } catch (error) {
    console.error('Sign up error:', error)
    return { data: null, error }
  }
}

// Sign in with email and password
export const signIn = async (email, password) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) throw error
    return { data, error: null }
  } catch (error) {
    console.error('Sign in error:', error)
    return { data: null, error }
  }
}

// Sign out
export const signOut = async () => {
  try {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    return { error: null }
  } catch (error) {
    console.error('Sign out error:', error)
    return { error }
  }
}

// Get current user
export const getCurrentUser = async () => {
  try {
    const { data: { user } } = await supabase.auth.getUser()
    return user
  } catch (error) {
    console.error('Error getting current user:', error)
    return null
  }
}

// Get user role from user metadata
export const getUserRole = (user) => {
  return user?.user_metadata?.role || 'patient'
}

// Update user profile
export const updateProfile = async (userId, profileData) => {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .upsert({ id: userId, ...profileData }, { onConflict: 'id' })

    if (error) throw error
    return { data, error: null }
  } catch (error) {
    console.error('Error updating profile:', error)
    return { data: null, error }
  }
}

// Get user profile
export const getUserProfile = async (userId) => {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single()

    if (error) throw error
    return { data, error: null }
  } catch (error) {
    console.error('Error getting user profile:', error)
    return { data: null, error }
  }
}

// Auth state change listener
export const onAuthStateChange = (callback) => {
  return supabase.auth.onAuthStateChange((event, session) => {
    callback(event, session)
  })
}